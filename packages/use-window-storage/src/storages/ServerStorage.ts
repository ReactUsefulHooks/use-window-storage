import BasicStorage, { FlagState } from './BasicStorage'

/**
 * @description
 * ServerStorage is mocked version of local or session storage
 * Instead only client side provides window storages, developer can use Storage within server context.
 */
export default class ServerStorage extends BasicStorage {
  setFlagState(flagState: FlagState): this {
    return this
  }

  setKeys(keys: any[]): this {
    return this
  }

  update(): void {}

  set(key: any, value: unknown): void {}

  get(key: any): unknown {
    return undefined
  }

  clear(key: any) {}

  clearAll() {}
}
