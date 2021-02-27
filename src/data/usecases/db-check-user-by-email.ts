import { CheckUserByEmail } from '@/domain/usecases'
import { CheckUserByEmailRepository } from '@/data/protocols'

export class DbCheckUserByEmail implements CheckUserByEmailRepository {
  constructor (private readonly checkUserByEmailRepository: CheckUserByEmailRepository) {}

  async check (email: string): Promise<CheckUserByEmail.Result> {
    return this.checkUserByEmailRepository.check(email)
  }
}