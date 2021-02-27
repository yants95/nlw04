export interface AddUser {
  add (user: AddUser.Params): Promise<AddUser.Result>
}

export namespace AddUser {
  export type Params = {
    name: string
    email: string
    created_at: Date
  }
  export type Result = boolean
}