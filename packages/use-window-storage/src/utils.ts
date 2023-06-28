export const isServerSide = (): boolean => typeof window !== 'undefined'
export const err = (msg: string): never => {
  throw new Error(msg)
}
