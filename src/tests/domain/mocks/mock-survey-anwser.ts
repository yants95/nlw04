import { SaveSurveyAnswer } from '@/domain/usecases'

export const mockAddSurveyAnswerParams = (): SaveSurveyAnswer.Params => ({
  value: 1,
  user_id: 'any_user_id'
})