import { LoadSurveysRepository, AddSurveyRepository, LoadSurveyByIdRepository, SaveSurveyAnswerRepository } from '@/data/protocols'
import { mockSurveysModel, mockSurveyModel } from '@/tests/data/mocks'

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

export class LoadSurveyByIdRepositorySpy implements LoadSurveyByIdRepository {
  id: string
  result = mockSurveyModel()

  async load (id: string): Promise<LoadSurveyByIdRepository.Result> {
    this.id = id
    return this.result
  }
}
