import { UserModel } from '@/domain/models'

export const mockUsersModel = () : UserModel[] => {
  return [{
    id: 'any_id',
    name: 'any_name',
    email: 'any_email',
    created_at: new Date('2021-02-20')
  }]
}