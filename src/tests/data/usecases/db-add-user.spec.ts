import { DbAddUser } from '@/data/usecases'
import { AddUserRepositorySpy } from '@/tests/data/mocks'
import { mockAddUserParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddUser
  addUserRepositorySpy: AddUserRepositorySpy
}

const makeSut = (): SutTypes => {
  const addUserRepositorySpy = new AddUserRepositorySpy()
  const sut = new DbAddUser(addUserRepositorySpy)
  return {
    sut,
    addUserRepositorySpy
  }
}

describe('DbAddUser Usecase', () => {
  test('should add a new user with correct values', async () => {
    const { sut, addUserRepositorySpy } = makeSut()
    const addUserParams = mockAddUserParams()
    await sut.add(addUserParams)
    expect(addUserRepositorySpy.params).toEqual({
      name: addUserParams.name,
      email: addUserParams.email,
      created_at: addUserParams.created_at
    })
  })
})