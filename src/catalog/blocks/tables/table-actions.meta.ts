import { Table2 } from 'lucide-react'
import { defineBlock } from '../../define-block'
import TableActions from './table-actions'
import source from './table-actions.tsx?raw'

export const block = defineBlock({
  id: "table-actions",
  name: "Table with row actions",
  category: "Tables",
  tone: "amber",
  icon: Table2,
  code: source,
  Component: TableActions,
})
