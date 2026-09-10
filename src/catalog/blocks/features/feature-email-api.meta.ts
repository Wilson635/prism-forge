import { Send } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FeatureEmailApi from './feature-email-api'
import source from './feature-email-api.tsx?raw'

export const block = defineBlock({
  id: "feature-email-api",
  name: "Product Features / Live email API",
  category: "Features",
  tone: "mint",
  icon: Send,
  code: source,
  Component: FeatureEmailApi,
})
