export type UserProps = {
  id: string
  name: string
  email: string
  password: string
}

export class User {
  props: UserProps

  constructor(props: UserProps) {
    this.props = props
  }
}
