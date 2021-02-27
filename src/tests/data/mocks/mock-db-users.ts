import { AddUserRepository, CheckUserByEmailRepository } from '@/data/protocols'

export class AddUserRepositorySpy implements AddUserRepository {
  params: AddUserRepository.Params
  result = true

  async add (params: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    this.params = params
    return this.result
  }
}

export class CheckUserByEmailRepositorySpy implements CheckUserByEmailRepository {
  email: string
  result = true

  async check (email: string): Promise<CheckUserByEmailRepository.Result> {
    this.email = email
    return this.result
  }
}