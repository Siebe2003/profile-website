'use client'

import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}

function Modal({isOpen, onClose, children}: ModalProps) {
  if (!isOpen) return

  return (
    createPortal(
      <div className='w-full h-full bg-black/[75%] fixed top-0 z-30 flex justify-center items-center' onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.body
    )
  )
}

export default Modal
