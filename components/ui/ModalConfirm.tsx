'use client'

import * as Dialog from '@radix-ui/react-dialog'

export function ModalConfirm({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="
          fixed left-1/2 top-1/2 z-5
          w-[90vw] max-w-md 
          -translate-x-1/2 -translate-y-1/2
          rounded-lg bg-white p-6 shadow-lg
        ">
            <Dialog.Title>
                
            </Dialog.Title>
          {children}

          <Dialog.Close className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
