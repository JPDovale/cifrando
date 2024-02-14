import { Entity } from '../../../core/Entity'

interface LetterProps {
  char: string
}

export class Letter extends Entity<LetterProps> {
  static create(props: LetterProps, id?: string) {
    return new Letter(props, id)
  }

  get char() {
    return this.props.char
  }
}
