import { AddUserRepository } from '@/data/protocols'

export class AddUserRepositorySpy implements AddUserRepository {
  params: AddUserRepository.Params

  async add (params: AddUserRepository.Params): Promise<void> {
    this.params = params
  }
}