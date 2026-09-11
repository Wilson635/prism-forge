"""Rasterize the PRISM mark (same geometry as .logo-mark) into .ico files."""

from __future__ import annotations

import io
import math
import struct
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
GREEN = (121, 242, 176)
BG = (9, 11, 10)


def mul(m, p):
    return (m[0] * p[0] + m[1] * p[1], m[2] * p[0] + m[3] * p[1])


def rotate(deg):
    a = math.radians(deg)
    c, s = math.cos(a), math.sin(a)
    return (c, -s, s, c)


def skew_y(deg):
    t = math.tan(math.radians(deg))
    return (1, 0, t, 1)


def compose(a, b):
    return (
        a[0] * b[0] + a[1] * b[2],
        a[0] * b[1] + a[1] * b[3],
        a[2] * b[0] + a[3] * b[2],
        a[2] * b[1] + a[3] * b[3],
    )


LAYERS = [
    (compose(skew_y(30), rotate(30)), 255),
    (compose(skew_y(-30), rotate(-30)), round(255 * 0.65)),
    (rotate(90), round(255 * 0.35)),
]

CORNERS = ((-5, -8), (5, -8), (5, 8), (-5, 8))


def render(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = max(2, round(size * 8 / 32))
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=(*BG, 255))

    scale = (size / 32) * 1.15
    cx = cy = size / 2
    stroke = max(1, round(1 * scale))

    for matrix, alpha in LAYERS:
        pts = []
        for corner in CORNERS:
            x, y = mul(matrix, corner)
            pts.append((cx + x * scale, cy + y * scale))
        draw.line(pts + [pts[0]], fill=(*GREEN, alpha), width=stroke, joint="curve")

    return img


def png_bytes(img: Image.Image) -> bytes:
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()


def write_ico(path: Path, images: list[Image.Image]) -> None:
    pngs = [png_bytes(im) for im in images]
    count = len(images)
    offset = 6 + 16 * count
    directory = struct.pack("<HHH", 0, 1, count)
    entries = b""
    for im, data in zip(images, pngs):
        w = 0 if im.width >= 256 else im.width
        h = 0 if im.height >= 256 else im.height
        entries += struct.pack("<BBBBHHII", w, h, 0, 0, 1, 32, len(data), offset)
        offset += len(data)
    path.write_bytes(directory + entries + b"".join(pngs))


def main() -> None:
    sizes = (16, 32, 48, 64, 256)
    images = [render(s) for s in sizes]
    for name in ("favicon.ico", "prism-logo.ico"):
        dest = ROOT / "public" / name
        write_ico(dest, images)
        print(f"wrote {dest} ({dest.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
