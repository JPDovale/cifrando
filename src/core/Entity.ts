import { randomUUID } from 'crypto'

export abstract class Entity<T> {
  protected props: T
  private _id: string

  protected constructor(props: T, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  get id() {
    return this._id
  }

  public equals(entity: Entity<unknown>): boolean {
    return entity.id === this.id
  }
}
