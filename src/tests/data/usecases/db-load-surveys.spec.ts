import { DbLoadSurveys } from '@/data/usecases'
import { LoadSurveysRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
  sut: DbLoadSurveys
  loadSurveysRepositorySpy: LoadSurveysRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSurveysRepositorySpy = new LoadSurveysRepositorySpy()
  const sut = new DbLoadSurveys(loadSurveysRepositorySpy)
  return {
    sut,
    loadSurveysRepositorySpy
  }
}

describe('DbLoadSurveys Usecase', () => {
  test('should return all surveys', async () => {
    const { sut, loadSurveysRepositorySpy } = makeSut()
    const tools = jest.spyOn(loadSurveysRepositorySpy, 'loadAll')
    await sut.loadAll()
    expect(tools).toHaveBeenCalledWith()
  })
})
