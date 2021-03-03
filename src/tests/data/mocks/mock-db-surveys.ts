import { LoadSurveysRepository, AddSurveyRepository, LoadSurveyByIdRepository } from '@/data/protocols'
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

export class LoadSurveyByIdRepositorySpy implements LoadSurveyByIdRepository {
  id: string

  async load (id: string): Promise<void> {
    this.id = id
  }
}
