import { UserModel } from "@/domain/models"

export interface AddUser {
  check (email: string): Promise<AddUser.Result>
}

export namespace AddUser {
  export type Params = Omit<UserModel, 'id'>
  export type Result = void
}