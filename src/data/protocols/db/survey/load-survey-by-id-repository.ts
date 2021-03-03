import { LoadSurveyById } from '@/domain/usecases'

export interface LoadSurveyByIdRepository {
  load: (id: string) => Promise<LoadSurveyByIdRepository.Result>
}

export namespace LoadSurveyByIdRepository {
  export type Result = LoadSurveyById.Result
}
