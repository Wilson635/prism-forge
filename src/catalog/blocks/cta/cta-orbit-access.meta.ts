import { Orbit } from 'lucide-react'
import { defineBlock } from '../../define-block'
import CtaOrbitAccess from './cta-orbit-access'
import source from './cta-orbit-access.tsx?raw'

export const block = defineBlock({
  id: 'cta-orbit-access',
  name: 'CTA — Orbit access',
  category: 'CTA',
  tone: 'violet',
  icon: Orbit,
  code: source,
  Component: CtaOrbitAccess,
})
