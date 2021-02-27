import { SurveyModel } from '@/domain/models'

export interface AddSurvey {
  add (data: AddSurvey.Params): Promise<AddSurvey.Result>
}

export namespace AddSurvey {
  export type Result = SurveyModel[]
  export type Params = Omit<SurveyModel, 'id'>
}