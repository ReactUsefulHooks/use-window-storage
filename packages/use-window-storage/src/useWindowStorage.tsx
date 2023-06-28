import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { LocalStorage, ServerStorage } from './storages'

type PickedFunction = 'set' | 'get' | 'clear' | 'clearAll'

export const initWindowStorage = <LocalStorageKeyType,>(localStorageKeys: LocalStorageKeyType[] = []) => {
  /* initiallize */
  const localStorage = new LocalStorage().setKeys(localStorageKeys)
  const serverStorage = new ServerStorage()

  const WindowStorageContext = createContext<{ localStorage: Pick<LocalStorage<LocalStorageKeyType>, PickedFunction> } | null>(null)

  const WindowStorageProvider = ({ children }: PropsWithChildren<any>) => {
    const [flag, setFlag] = useState(1)
    const [storages, setStorages] = useState(() => ({
      localStorage: serverStorage.setFlagState([flag, setFlag])
    }))
    useEffect(() => {
      setStorages({ localStorage: localStorage.setFlagState([flag, setFlag]) })
    }, [flag])
    return <WindowStorageContext.Provider value={storages}>{children}</WindowStorageContext.Provider>
  }

  const useWindowStorage = () => useContext(WindowStorageContext) as { localStorage: Pick<LocalStorage<LocalStorageKeyType>, PickedFunction> }
  return {
    useWindowStorage,
    WindowStorageProvider
  }
}

const { useWindowStorage } = initWindowStorage(['eddie'])

const { localStorage } = useWindowStorage()

localStorage.get('eddie1')
