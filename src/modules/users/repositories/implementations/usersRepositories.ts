import { Repository } from 'typeorm'
import { ICreateUserDTO } from '../../dtos/createUserDTO'
import { User } from '../../entities/User'
import { IUsersRepositories } from '../IUsersRepositories'

class UsersRepositories implements IUsersRepositories {
  private repository: Repository<User>

  constructor(repository: Repository<User>) {
    this.repository = repository
  }

  save(data: ICreateUserDTO): Promise<User> {
    const user = new User(data.name, data.email, data.age, data.password)

    return this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    })

    if (!user) {
      return undefined
    }

    return user
  }
}

export { UsersRepositories }
