"""Rasterize the PRISM mark (same geometry as .logo-mark) into favicon.ico."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "favicon.ico"
ALSO = ROOT / "public" / "prism-logo.ico"

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
    """a after b: a * b."""
    return (
        a[0] * b[0] + a[1] * b[2],
        a[0] * b[1] + a[1] * b[3],
        a[2] * b[0] + a[3] * b[2],
        a[2] * b[1] + a[3] * b[3],
    )


# CSS/SVG: transform="skewY(30) rotate(30)" → rotate first, then skewY
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


def main() -> None:
    sizes = (16, 32, 48, 64, 256)
    images = [render(s) for s in sizes]
    images[0].save(OUT, format="ICO", sizes=[(s, s) for s in sizes], append_images=images[1:])
    images[0].save(ALSO, format="ICO", sizes=[(s, s) for s in sizes], append_images=images[1:])
    print(f"wrote {OUT} and {ALSO}")


if __name__ == "__main__":
    main()
