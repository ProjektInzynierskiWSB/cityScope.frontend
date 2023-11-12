export interface StorageKeys {
  authToken: string
}

export interface StorageManagerOptions {
  storageKeys?: StorageKeys
  storage?: Storage
}
