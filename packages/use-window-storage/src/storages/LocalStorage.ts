import BasicStorage, { FlagState } from './BasicStorage'

export default class LocalStorage<ILocalStorage> extends BasicStorage {
  private flagState?: FlagState

  setFlagState(flagState: FlagState): this {
    this.flagState = flagState
    return this
  }

  update(): void | never {
    if (!this.flagState) throw new Error('[useWindowStorage.update] need to define flagState') /* guard */
    const [_, setFlag] = this.flagState
    setFlag((prev) => prev + 1)
  }

  set<Key extends keyof ILocalStorage>(key: Key, value: ILocalStorage[Key]): void {
    try {
      window.localStorage.setItem(window.btoa(key as string), window.btoa(encodeURIComponent(JSON.stringify(value))))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.set], fail to set: ', e)
    }
  }

  get<Key extends keyof ILocalStorage>(key: Key): ILocalStorage[Key] | undefined {
    try {
      const item = decodeURIComponent(window.atob(window.localStorage.getItem(window.btoa(key as string) ?? '') ?? ''))
      if (item) return JSON.parse(item)
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.get], fail to get: ', e)
    }
  }

  clear(key: keyof ILocalStorage): void {
    try {
      const item = decodeURIComponent(window.atob(window.localStorage.getItem(window.btoa(key as string) ?? '') ?? ''))
      if (!item) return /* guard */
      window.localStorage.removeItem(window.btoa(key as string))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.get], fail to clear: ', e)
    }
  }

  clearAll() {
    try {
      window.localStorage.clear()
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.clearAll], fail to clearAll: ', e)
    }
  }
}
