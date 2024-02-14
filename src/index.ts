import readline from 'readline'
import { NumericalAlphabet } from './modules/cryptography/implementations/NumericalAlphabet'
import { Word } from './modules/word/entities/Word'
import { EncondeWordService } from './modules/cryptography/services/EncodeWord'
import { MorseCode } from './modules/cryptography/implementations/MorseCode'

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function bootstrap() {
  rd.question('Digite uma palavra >', (res) => {
    // const numerical = new NumericalAlphabet()
    const morse = new MorseCode()
    const encodeService = new EncondeWordService(morse)
    const word = Word.createFromWord(res)

    const result = encodeService.execute({ word })

    console.log(result)

    rd.close()
  })
}

bootstrap()
