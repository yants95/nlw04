export interface CheckUserByEmail {
  check: (email: string) => Promise<CheckUserByEmail.Result>
}

export namespace CheckUserByEmail {
  export type Result = boolean
}
