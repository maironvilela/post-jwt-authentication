import { UserProps } from '../../models/user'

export interface Authenticator {
  authenticate(data: Authenticator.Props): Promise<Authenticator.Result>
}

export namespace Authenticator {
  export type Props = {
    email: string
    password: string
  }

  export type Result = {
    user: UserProps
  }
}
