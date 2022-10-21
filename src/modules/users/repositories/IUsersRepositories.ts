import { User } from '../entities/User'
import { ICreateUserDTO } from '../dtos/createUserDTO'

interface IUsersRepositories {
  save(data: ICreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User | undefined>
}

export { IUsersRepositories }
