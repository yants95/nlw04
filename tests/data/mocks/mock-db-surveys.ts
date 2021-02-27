import { LoadSurveysRepository } from '@/data/protocols'
import { mockSurveysModel } from '@/tests/data/mocks'

export class LoadSurveysRepositorySpy implements LoadSurveysRepository {
  result = mockSurveysModel()

  async loadAll (): Promise<LoadSurveysRepository.Result> {
    return this.result
  }
}