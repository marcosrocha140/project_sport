"use Client";

import * as Dialog from "@radix-ui/react-dialog";

export function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed z-4 left-28 top-1/2
          w-[60%] h-full max-w-md 
          -translate-x-1/2 -translate-y-1/2
          rounded-lg bg-white shadow-lg
        "
        >
          <Dialog.DialogTitle>{children}</Dialog.DialogTitle>

          <Dialog.Close className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            X
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
