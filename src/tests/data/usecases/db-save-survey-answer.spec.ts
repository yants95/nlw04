import { DbSaveSurveyAnswer } from '@/data/usecases'
import { SaveSurveysAnswerRepositorySpy } from '@/tests/data/mocks'
import { mockAddSurveyAnswerParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbSaveSurveyAnswer
  saveSurveysAnwserRepositorySpy: SaveSurveysAnswerRepositorySpy
}

const makeSut = (): SutTypes => {
  const saveSurveysAnwserRepositorySpy = new SaveSurveysAnswerRepositorySpy()
  const sut = new DbSaveSurveyAnswer(saveSurveysAnwserRepositorySpy)
  return {
    sut,
    saveSurveysAnwserRepositorySpy
  }
}

describe('DbSaveSurveyAnswer Usecase', () => {
  test('should be able to create a new answer to an specific survey', async () => {
    const { sut, saveSurveysAnwserRepositorySpy } = makeSut()
    const addASurveyAnswerParams = mockAddSurveyAnswerParams()
    await sut.save(mockAddSurveyAnswerParams())
    expect(saveSurveysAnwserRepositorySpy.params).toEqual({
      value: addASurveyAnswerParams.value,
      survey_id: addASurveyAnswerParams.survey_id
    })
  })
})