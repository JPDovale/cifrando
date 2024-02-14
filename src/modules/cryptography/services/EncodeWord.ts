import { Word } from '../../word/entities/Word'
import { Cryptography } from '../contracts/Cryptography'

interface EncodeWordServiceRequest {
  word: Word
}

export class EncondeWordService {
  constructor(private readonly cryptography: Cryptography) { }

  execute({ word }: EncodeWordServiceRequest) {
    const encodedWord = word.letters
      .map((l) => this.cryptography.encode(l.char))
      .join(' ')
    return encodedWord
  }
}
