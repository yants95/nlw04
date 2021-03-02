import { SurveyUsersModel } from '@/domain/models'

export const mockSurveysUserModel = () : SurveyUsersModel => {
  return {
    id: 'any_id',
	  user_id: 'any_user_id',
    survey_id: 'any_survey_id',
    value: 1,
    created_at: new Date('2021-02-20')
  }
}