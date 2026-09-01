import { blockOrder } from './block-order'
import { parseCatalog } from './schema'
import type { Block } from './types'

/**
 * Add a legacy string block: `src/catalog/blocks/<category>/<id>.ts`
 * exporting `const block = { ... } satisfies Block`.
 *
 * Add a compiled block: `<id>.tsx` (the UI) + `<id>.meta.ts` that
 * `defineBlock`s metadata, `code` from `?raw`, and `Component`.
 *
 * New files are picked up automatically. Append the id to `blockOrder`
 * only if it must appear before the end of the list.
 */

const modules = import.meta.glob<Block>('./blocks/**/*.ts', {
  eager: true,
  import: 'block',
})

const orderedIds: readonly string[] = blockOrder

function sortBlocks(left: Block, right: Block) {
  const leftIndex = orderedIds.indexOf(left.id)
  const rightIndex = orderedIds.indexOf(right.id)
  if (leftIndex === -1 && rightIndex === -1) return left.id.localeCompare(right.id)
  if (leftIndex === -1) return 1
  if (rightIndex === -1) return -1
  return leftIndex - rightIndex
}

export const blocks: Block[] = parseCatalog(Object.values(modules).sort(sortBlocks))
