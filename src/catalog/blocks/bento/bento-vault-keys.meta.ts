import { KeyRound } from 'lucide-react'
import { defineBlock } from '../../define-block'
import BentoVaultKeys from './bento-vault-keys'
import source from './bento-vault-keys.tsx?raw'

export const block = defineBlock({
  id: 'bento-vault-keys',
  name: 'Bento — Vault keys',
  category: 'Bento',
  tone: 'amber',
  icon: KeyRound,
  code: source,
  Component: BentoVaultKeys,
})
