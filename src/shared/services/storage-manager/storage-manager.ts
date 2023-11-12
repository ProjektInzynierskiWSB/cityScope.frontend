import config from 'config'
import { StorageManagerOptions } from './storage-manager.types'

class StorageManager {
  private storageKeys = config.storageKeys
  private storage = window.localStorage

  constructor({ storageKeys, storage }: StorageManagerOptions = {}) {
    if (storageKeys) this.storageKeys = storageKeys
    if (storage) this.storage = storage
  }

  public getAuthToken = () => this.storage.getItem(this.storageKeys.authToken)

  public setAuthToken = (value: string) =>
    this.storage.setItem(this.storageKeys.authToken, value)
}

export default StorageManager
