import { SurveyModel } from '@/domain/models'

export const mockSurveysModel = () : SurveyModel[] => {
  return [{
    id: 'any_id',
	title: 'any_title',
	description: 'any_description',
	created_at: new Date('2021-02-20')
  }]
}