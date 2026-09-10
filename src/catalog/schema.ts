import { z } from 'zod'
import { BLOCK_CATEGORIES, type Block, type BlockCategory, type PreviewTone } from './types'

export const previewToneSchema = z.enum(['mint', 'violet', 'blue', 'amber'])

export const blockCategorySchema = z.enum(BLOCK_CATEGORIES)

export const blockRecordSchema = z.object({
  id: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, 'Use a kebab-case id'),
  name: z.string().min(1),
  category: blockCategorySchema,
  tone: previewToneSchema,
  code: z.string().min(1),
})

export type BlockRecord = z.infer<typeof blockRecordSchema>

export function parseBlockRecord(block: Block): BlockRecord {
  return blockRecordSchema.parse({
    id: block.id,
    name: block.name,
    category: block.category,
    tone: block.tone,
    code: block.code,
  })
}

export function parseCatalog(blocks: Block[]): Block[] {
  const records = z.array(blockRecordSchema).parse(
    blocks.map((block) => ({
      id: block.id,
      name: block.name,
      category: block.category,
      tone: block.tone,
      code: block.code,
    })),
  )

  const seen = new Set<string>()
  for (const record of records) {
    if (seen.has(record.id)) {
      throw new Error(`Duplicate catalog block id: ${record.id}`)
    }
    seen.add(record.id)
  }

  return blocks
}

export function isBlockCategory(value: string): value is BlockCategory {
  return blockCategorySchema.safeParse(value).success
}

export function isPreviewTone(value: string): value is PreviewTone {
  return previewToneSchema.safeParse(value).success
}
