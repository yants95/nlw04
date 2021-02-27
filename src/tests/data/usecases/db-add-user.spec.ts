import { DbAddUser } from '@/data/usecases'
import { AddUserRepositorySpy, CheckUserByEmailRepositorySpy } from '@/tests/data/mocks'
import { mockAddUserParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddUser
  addUserRepositorySpy: AddUserRepositorySpy
  checkUserByEmailRepositorySpy: CheckUserByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const addUserRepositorySpy = new AddUserRepositorySpy()
  const checkUserByEmailRepositorySpy = new CheckUserByEmailRepositorySpy()
  const sut = new DbAddUser(addUserRepositorySpy, checkUserByEmailRepositorySpy)
  return {
    sut,
    addUserRepositorySpy,
    checkUserByEmailRepositorySpy
  }
}

describe('DbAddUser Usecase', () => {
  test('should add a new user with correct values', async () => {
    const { sut, addUserRepositorySpy } = makeSut()
    const addUserParams = mockAddUserParams()
    await sut.add(addUserParams)
    expect(addUserRepositorySpy.result).toBe(true)
  })

  test('Should return false if AddUserRepository returns false', async () => {
    const { sut, addUserRepositorySpy } = makeSut()
    addUserRepositorySpy.result = false
    const isValid = await sut.add(mockAddUserParams())
    expect(isValid).toBe(false)
  })

  test('should return false if CheckUserByEmailRepository returns true', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    checkUserByEmailRepositorySpy.result = true
    const isValid = await sut.add(mockAddUserParams())
    expect(isValid).toBe(false)
  })

  test('should call CheckUserByEmailRepository with correct email', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    const addAccountParams = mockAddUserParams()
    await sut.add(addAccountParams)
    expect(checkUserByEmailRepositorySpy.email).toBe(addAccountParams.email)
  })

  test('should not add a new user if email provided already exists', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut()
    checkUserByEmailRepositorySpy.result = false
    const addUserParams = mockAddUserParams()
    await sut.add(addUserParams)
    await checkUserByEmailRepositorySpy.check(addUserParams.email)
    expect(checkUserByEmailRepositorySpy.result).toBe(false)
  })
})