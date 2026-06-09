codigos para tamanho de tela
sm  → 640px
md  → 768px
lg  → 1024px
xl  → 1280px
2xl → 1536px


green: dark:bg-[#032e15]

🔑 Layout dispara ações
🔑 Context compartilha estado
🔑 Página decide o conteúdo do modal


Modal do Popup(Pra ser reutilizado onde quiser no projeto)
'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

export function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                className="
                  fixed left-1/2 top-1/2
                  w-[90vw] max-w-md
                  -translate-x-1/2 -translate-y-1/2
                  rounded-lg bg-white p-6 shadow-lg
                "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {children}

                <Dialog.Close className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                  ✕
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

