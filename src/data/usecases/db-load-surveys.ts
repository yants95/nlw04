import { LoadSurveys } from '@/domain/usecases'
import { LoadSurveysRepository } from '@/data/protocols'

export class DbLoadSurveys implements LoadSurveysRepository {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async loadAll (): Promise<LoadSurveys.Result> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}