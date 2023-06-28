import BasicStorage, { FlagState } from './BasicStorage'

export default class LocalStorage<T> extends BasicStorage {
  keys: T[] = []
  private flagState?: FlagState

  setFlagState(flagState: FlagState): this {
    this.flagState = flagState
    return this
  }

  setKeys(keys: any[]): this {
    this.keys = keys
    return this
  }

  update(): void | never {
    if (!this.flagState) throw new Error('[useWindowStorage.update] need to define flagState') /* guard */
    const [_, setFlag] = this.flagState
    setFlag((prev) => prev++)
  }

  set(key: this['keys'][number], value: unknown): void {
    try {
      window.localStorage.setItem(window.btoa(key as string), window.btoa(encodeURIComponent(JSON.stringify(value))))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.set], fail to set: ', e)
    }
  }

  get(key: this['keys'][number]): unknown {
    try {
      const item = decodeURIComponent(window.atob(window.localStorage.getItem(window.btoa(key) ?? '') ?? ''))
      if (item) return JSON.parse(item)
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.get], fail to get: ', e)
    }
  }

  clear(key: any): void {
    try {
      const item = decodeURIComponent(window.atob(window.localStorage.getItem(window.btoa(key) ?? '') ?? ''))
      if (!item) return /* guard */
      window.localStorage.removeItem(window.btoa(key))
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.get], fail to clear: ', e)
    }
  }

  clearAll() {
    try {
      window.localStorage.claer()
      this.update()
    } catch (e) {
      console.error('[useWindowStorage.LocalStorage.clearAll], fail to clearAll: ', e)
    }
  }
}
