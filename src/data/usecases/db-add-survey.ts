import { AddSurvey } from '@/domain/usecases'
import { AddSurveyRepository } from '@/data/protocols'

export class DbAddSurvey implements AddSurveyRepository {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (params: AddSurvey.Params): Promise<void> {
    await this.addSurveyRepository.add(params)
  }
}