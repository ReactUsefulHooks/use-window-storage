import { useContext } from 'react'
import ModalContext from './ModalContext'
import ModalController from './ModalController'

type UseModalReturns = InstanceType<typeof ModalController>

export const useModal = () => useContext(ModalContext) as UseModalReturns
