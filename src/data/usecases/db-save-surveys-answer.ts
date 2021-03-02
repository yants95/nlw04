import { SaveSurveyAnswer } from '@/domain/usecases'
import { SaveSurveyAnswerRepository } from '@/data/protocols'

export class DbSaveSurveyAnswer implements SaveSurveyAnswer {
  constructor (private readonly saveSurveysAnswerRepository: SaveSurveyAnswerRepository) {}

  async save (params: SaveSurveyAnswer.Params): Promise<void> {
    await this.saveSurveysAnswerRepository.save(params)
  }
}
