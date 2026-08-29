"use client"

import * as React from "react"
import { toast as toastManager, useToastManager } from "@/components/ui/toast"

type ToastManagerToast = Parameters<typeof toastManager.add>[0]

// Options acceptées par toast(...) — identiques à ce qu'accepte le manager
// base-ui (title, description, type, action, timeout, onClose, etc.),
// à l'exclusion de "id" qui est généré automatiquement.
type Toast = Omit<ToastManagerToast, "id">

function toast(props: Toast) {
  const id = toastManager.add(props)

  const update = (props: Toast) => toastManager.update(id, props)
  const dismiss = () => toastManager.close(id)

  return {
    id,
    dismiss,
    update,
  }
}

function useToast() {
  const { toasts, close } = useToastManager()

  const dismiss = React.useCallback(
    (toastId?: string) => {
      if (toastId) {
        close(toastId)
      } else {
        toasts.forEach((t) => close(t.id))
      }
    },
    [toasts, close]
  )

  return {
    toasts,
    toast,
    dismiss,
  }
}

export { useToast, toast }