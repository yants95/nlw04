import { AddSurvey } from '@/domain/usecases'

export const mockAddSurveyParams = (): AddSurvey.Params => ({
  title: 'any_title',
  description: 'any_description',
  created_at: new Date('2021-02-20')
})