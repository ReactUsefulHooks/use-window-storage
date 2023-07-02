import BasicStorage, { FlagState } from './BasicStorage'

/**
 * @description
 * ServerStorage is mocked version of local or session storage
 * Instead only client side provides window storages, developer can use Storage within server context.
 */
export default class ServerStorage<IStorage> extends BasicStorage {
  setFlagState(flagState: FlagState): this {
    return this
  }

  update(): void {}

  set<Key extends keyof IStorage>(key: Key, value: IStorage[Key]): void {}

  get<Key extends keyof IStorage>(key: Key): IStorage[Key] | undefined {
    return undefined
  }

  clear(key: keyof IStorage): void {}

  clearAll(): void {}
}
