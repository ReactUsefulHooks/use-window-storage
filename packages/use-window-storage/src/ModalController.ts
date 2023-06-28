import React from 'react'
import { isServerSide, err } from './utils'

export type Resolve = (value: any) => void
export type Reject = (reason: any) => void
export type Close = () => void
type FlagState = [number, React.Dispatch<React.SetStateAction<number>>]

interface ModalInfo {
  key: string
  Component: React.FC<any>
  props: any
  resolve: Resolve
  reject: Reject
  close: () => void
}

export default class ModalController {
  private readonly flagState: FlagState
  private modalInfos: ModalInfo[] = []

  constructor(flagState: FlagState) {
    this.flagState = flagState
  }

  get top() {
    return this.modalInfos[this.modalInfos.length - 1]
  }

  private update(): void {
    const [_, setFlag] = this.flagState
    setFlag((prev) => prev + 1)
  }

  private handlePromise(key: string, resolver: Resolve | Reject, value: any) {
    resolver(value)
    this.close(key)
  }

  clear(): void {
    this.modalInfos = []
    this.update()
  }

  close(key: string): void {
    this.modalInfos = this.modalInfos.filter(({ key: _key }) => key !== _key)
    this.update()
  }

  pop(): void {
    this.modalInfos.pop()
    this.update()
  }

  async push<Props>(key: string, Component: React.FC<Props>, props?: Omit<Props, 'resolve' | 'reject' | 'close'>): Promise<unknown> | never {
    return new Promise((resolve, reject) => {
      this.modalInfos.push({
        key,
        Component,
        props,
        resolve: (value) => this.handlePromise(key, resolve, value),
        reject: (reason) => this.handlePromise(key, reject, reason),
        close: () => this.handlePromise(key, resolve, 'close')
      })
      this.update()
    })
  }
}
