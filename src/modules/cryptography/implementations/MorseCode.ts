import { Cryptography } from '../contracts/Cryptography'

export class MorseCode implements Cryptography {
  cryptography = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',

    // Números
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
  } as { [x: string]: string }

  encode(key: string): string | number {
    return this.cryptography[key]
  }

  decode(key: string): string | undefined {
    const pair = Object.entries(this.cryptography).find(([, v]) => v === key)
    return pair?.[1]
  }
}
