import React, { ReactElement, PropsWithChildren, useState } from 'react'
import ModalContext from './ModalContext'
import ModalController from './ModalController'
import ModalContainer from './ModalContainer'

export default function ModalProvider({ children }: PropsWithChildren<any>): ReactElement {
  const flagState = useState(1)
  const [modalCotroller] = useState(() => new ModalController(flagState))
  return (
    <ModalContext.Provider value={modalCotroller}>
      <>{children}</>
      <ModalContainer />
    </ModalContext.Provider>
  )
}
