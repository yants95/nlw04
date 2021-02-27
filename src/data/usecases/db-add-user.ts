import { AddUser } from '@/domain/usecases'
import { AddUserRepository } from '@/data/protocols'

export class DbAddUser implements AddUserRepository {
  constructor (private readonly addSurveyRepository: AddUserRepository) {}

  async add (params: AddUser.Params): Promise<void> {
    await this.addSurveyRepository.add(params)
  }
}