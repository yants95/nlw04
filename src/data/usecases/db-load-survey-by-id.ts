import { LoadSurveyById } from '@/domain/usecases'
import { LoadSurveyByIdRepository } from '@/data/protocols'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async load (surveyId: string): Promise<LoadSurveyByIdRepository.Result | null> {
    const survey = await this.loadSurveyByIdRepository.load(surveyId)
    return survey || null
  }
}
