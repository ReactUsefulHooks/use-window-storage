import { Resolve, Reject, Close } from './ModalController'

export { default as ModalProvider } from './ModalProvider'
export * from './useModal'

export interface InjectedModalProps {
  resolve: Resolve
  reject: Reject
  close: Close
}
