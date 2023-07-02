import BasicStorage, { FlagState } from './BasicStorage'

export default class SessionStorage<ISessionStorage> extends BasicStorage {
  private flagState?: FlagState

  setFlagState(flagState: FlagState): this {
    this.flagState = flagState
    return this
  }

  update(): void | never {
    if (!this.flagState) throw new Error('[useWindowStorage.sessionStorage.update] need to define flagState') /* guard */
    const [_, setFlag] = this.flagState
    setFlag((prev) => prev++)
  }

  set<Key extends keyof ISessionStorage>(key: Key, value: ISessionStorage[Key]): void {
    try {
      window.sessionStorage.setItem(window.btoa(key as string), window.btoa(encodeURIComponent(JSON.stringify(value))))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.sessionStorage.set], fail to set: ', e)
    }
  }

  get<Key extends keyof ISessionStorage>(key: Key): ISessionStorage[Key] | undefined {
    try {
      const item = decodeURIComponent(window.atob(window.sessionStorage.getItem(window.btoa(key as string) ?? '') ?? ''))
      if (item) return JSON.parse(item)
    } catch (e) {
      console.error('[useWindowStorage.sessionStorage.get], fail to get: ', e)
    }
  }

  clear(key: keyof ISessionStorage): void {
    try {
      const item = decodeURIComponent(window.atob(window.sessionStorage.getItem(window.btoa(key as string) ?? '') ?? ''))
      if (!item) return /* guard */
      window.sessionStorage.removeItem(window.btoa(key as string))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.sessionStorage.get], fail to clear: ', e)
    }
  }

  clearAll() {
    try {
      window.sessionStorage.claer()
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.sessionStorage.clearAll], fail to clearAll: ', e)
    }
  }
}
