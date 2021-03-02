import { SaveSurveyAnswer } from '@/domain/usecases'

export interface SaveSurveyAnswerRepository {
  save: (params: SaveSurveyAnswerRepository.Params) => Promise<void>
}

export namespace SaveSurveyAnswerRepository {
  export type Params = SaveSurveyAnswer.Params
}
