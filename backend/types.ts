export type Modify<T, R> = Omit<T, keyof R> & R
export type PartialFields<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>
