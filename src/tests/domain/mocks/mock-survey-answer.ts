import { SaveSurveyAnswer } from '@/domain/usecases'

export const mockAddSurveyAnswerParams = (): SaveSurveyAnswer.Params => ({
  value: 1,
  survey_id: 'any_survey_id'
})
