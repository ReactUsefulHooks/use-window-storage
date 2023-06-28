import React from 'react'

export type FlagState = [number, React.Dispatch<React.SetStateAction<number>>]

export default class BasicStorage {
  setFlagState(flagState: FlagState): any {
    throw new Error(`Need to override *setFlagState* function in derived class.`)
  }

  setKeys(keys: any[]): any {
    throw new Error(`Need to override *setKeys* function in derived class.`)
  }

  update(): any {
    throw new Error(`Need to override *update* function in derived class.`)
  }

  set(key: any, value: unknown): any {
    throw new Error(`Need to override *set* function in derived class.`)
  }

  get(key: any): any {
    throw new Error(`Need to override *get* function in derived class.`)
  }

  clear(key: any): any {
    throw new Error(`Need to override *clear* function in derived class.`)
  }

  clearAll(): any {
    throw new Error(`Need to override *clearAll* function in derived class.`)
  }
}
