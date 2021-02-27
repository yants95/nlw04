import { AddUser } from '@/domain/usecases'
import { AddUserRepository, CheckUserByEmailRepository } from '@/data/protocols'

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly checkUserByEmailRepository: CheckUserByEmailRepository
  ) {}

  async add (params: AddUser.Params): Promise<AddUser.Result> {
    const userExists = await this.checkUserByEmailRepository.check(params.email)
    let isValid = false
    if (!userExists) {
      isValid = await this.addUserRepository.add(params)
    }
    return isValid
  }
}