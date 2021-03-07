import { SurveyModel } from '@/domain/models'

export interface LoadSurveyById {
  load: (id: string) => Promise<LoadSurveyById.Result | null>
}

export namespace LoadSurveyById {
  export type Result = SurveyModel
}
