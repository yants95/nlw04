import { LoadSurveysRepository, AddSurveyRepository, SaveSurveyAnswerRepository } from '@/data/protocols'
import { mockSurveysModel } from '@/tests/data/mocks'

export class LoadSurveysRepositorySpy implements LoadSurveysRepository {
  result = mockSurveysModel()

  async loadAll (): Promise<LoadSurveysRepository.Result> {
    return this.result
  }
}

export class AddSurveyRepositorySpy implements AddSurveyRepository {
  params: AddSurveyRepository.Params

  async add (params: AddSurveyRepository.Params): Promise<void> {
    this.params = params
  }
}

export class SaveSurveysAnswerRepositorySpy implements SaveSurveyAnswerRepository {
  params: SaveSurveyAnswerRepository.Params

  async save (params: SaveSurveyAnswerRepository.Params): Promise<void> {
    this.params = params
  }
}