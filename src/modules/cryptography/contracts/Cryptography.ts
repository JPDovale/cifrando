export interface Cryptography {
  encode(key: string): string | number
  decode(key: string): string | number | undefined
}
