import { Settings } from 'lucide-react'
import { defineBlock } from '../../define-block'
import FormProfileSettings from './form-profile-settings'
import source from './form-profile-settings.tsx?raw'

export const block = defineBlock({
  id: "form-profile-settings",
  name: "Profile settings",
  category: "Forms",
  tone: "mint",
  icon: Settings,
  code: source,
  Component: FormProfileSettings,
})
