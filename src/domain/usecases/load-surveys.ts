import { SurveyModel } from '@/domain/models'

export interface LoadSurveys {
  loadAll (): Promise<LoadSurveys.Result>
}

export namespace LoadSurveys {
  export type Result = SurveyModel[]
}