import { Entity } from '../../../core/Entity'
import { Letter } from '../../letter/entities/Letter'

interface WordProps {
  word: Letter[]
}

export class Word extends Entity<WordProps> {
  static create(props: WordProps, id?: string) {
    return new Word(props, id)
  }

  static createFromWord(rawWord: string) {
    const letters = rawWord.split('').map((l) =>
      Letter.create({
        char: l,
      }),
    )

    const word = Word.create({
      word: letters,
    })

    return word
  }

  get letters() {
    return this.props.word
  }
}
