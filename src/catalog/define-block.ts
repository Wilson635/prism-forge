import { parseBlockRecord } from './schema'
import type { Block } from './types'

export function defineBlock(block: Block): Block {
  parseBlockRecord(block)
  return block
}
