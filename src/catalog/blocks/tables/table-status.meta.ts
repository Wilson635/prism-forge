import { Table2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TableStatus from './table-status'
import source from './table-status.tsx?raw'

export const block = defineBlock({
  id: "table-status",
  name: "Data table with status badges",
  category: "Tables",
  tone: "blue",
  icon: Table2,
  code: source,
  Component: TableStatus,
})
