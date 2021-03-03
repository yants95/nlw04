import { AddUser } from '@/domain/usecases'

export const mockAddUserParams = (): AddUser.Params => ({
  name: 'any_name',
  email: 'any_email',
  created_at: new Date('2021-02-20')
})
