import React, { ReactElement, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useModal } from './useModal'
import './ModalContainer.css'

const MODAL_ID = 'react-useful-hooks-modal-container'

export default function ModalContainer(): ReactElement {
  const modal = useModal()
  const topComponentInfo = modal.top
  useEffect(() => {
    if (document.getElementById(MODAL_ID)) return /* guard */
    const modalDOM = document.createElement('div')
    modalDOM.id = MODAL_ID
    document.body.append(modalDOM)
  }, [])

  /* control scroll */
  useEffect(() => {
    if (!topComponentInfo) return /* guard */
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [topComponentInfo])

  if (!topComponentInfo) return <></> /* guard */
  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <topComponentInfo.Component
        close={topComponentInfo.close}
        resolve={topComponentInfo.resolve}
        reject={topComponentInfo.reject}
        {...(topComponentInfo?.props ?? {})}
      />
    </div>,
    window.document.getElementById(MODAL_ID) as HTMLElement
  )
}
