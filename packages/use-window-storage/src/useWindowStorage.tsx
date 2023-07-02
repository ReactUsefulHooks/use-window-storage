import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { LocalStorage, ServerStorage, SessionStorage } from './storages'

type PickedFunction = 'get' | 'set' | 'clear' | 'clearAll'
type PickedServerStorage<T> = Pick<ServerStorage<T>, PickedFunction>
type PickedLocalStorage<T> = Pick<LocalStorage<T>, PickedFunction>
type PickedSessionStorage<T> = Pick<SessionStorage<T>, PickedFunction>

type UseWindowStorageReturn<ILocalStorage, ISessionStorage> = {
  localStorage: PickedLocalStorage<ILocalStorage> | PickedServerStorage<ILocalStorage>
  sessionStorage: PickedSessionStorage<ISessionStorage> | PickedServerStorage<ISessionStorage>
}

/* initiallize */
const localStorage = new LocalStorage()
const sessionStorage = new SessionStorage()
const serverStorage = new ServerStorage()

const WindowStorageContext = createContext<UseWindowStorageReturn<any, any> | null>(null)

export const WindowStorageProvider = ({ children }: PropsWithChildren<any>) => {
  const flagState = useState(1)
  const [storages, setStorages] = useState(() => ({
    localStorage: serverStorage.setFlagState(flagState),
    sessionStorage: serverStorage.setFlagState(flagState)
  }))
  useEffect(() => {
    setStorages({ localStorage: localStorage.setFlagState(flagState), sessionStorage: sessionStorage.setFlagState(flagState) })
  }, [flagState[0]])
  return <WindowStorageContext.Provider value={storages}>{children}</WindowStorageContext.Provider>
}

export const useWindowStorage = <ILocalStorage, ISessionStorage>() => useContext(WindowStorageContext) as UseWindowStorageReturn<ILocalStorage, ISessionStorage>
