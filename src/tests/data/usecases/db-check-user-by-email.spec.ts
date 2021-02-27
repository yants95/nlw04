import { DbCheckUserByEmail } from '@/data/usecases'
import { CheckUserByEmailRepositorySpy } from '@/tests/data/mocks'
import { throwError } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbCheckUserByEmail
  checkUserByEmailRepositorySpy: CheckUserByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkUserByEmailRepositorySpy = new CheckUserByEmailRepositorySpy()
  const sut = new DbCheckUserByEmail(checkUserByEmailRepositorySpy)
  return {
    sut,
    checkUserByEmailRepositorySpy
  }
}

let email: string

describe('DbCheckUserByEmail Usecase', () => {
  beforeEach(() => {
    email = 'any_email'
  })

  test('should call CheckUserByEmailRepository', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    await sut.check(email)
    expect(checkUserByEmailRepositorySpy.email).toBe(email)
  })

  test('should return true if CheckUserByEmailRepository returns true', async () => {
    const { sut } = makeSut()
    const exists = await sut.check(email)
    expect(exists).toBe(true)
  })

  test('should return false if CheckUserByEmailRepository returns false', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    checkUserByEmailRepositorySpy.result = false
    const exists = await sut.check(email)
    expect(exists).toBe(false)
  })

  test('should throw if CheckUserByEmailRepository throws', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    jest.spyOn(checkUserByEmailRepositorySpy, 'check').mockImplementationOnce(throwError)
    const promise = sut.check(email)
    await expect(promise).rejects.toThrow()
  })
})
