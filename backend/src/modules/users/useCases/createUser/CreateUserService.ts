import { ICreateUserDTO } from '../../dtos/createUserDTO'
import { User } from '../../entities/User'
import { genSaltSync, hashSync } from 'bcrypt'
import { IUsersRepositories } from '../../repositories/IUsersRepositories'
import { AppError } from '../../../../utils/AppError'

class CreateUserService {
  private readonly repository: IUsersRepositories

  constructor(repository: IUsersRepositories) {
    this.repository = repository
  }

  async execute({
    name,
    email,
    password,
    age,
  }: ICreateUserDTO): Promise<User | undefined> {
    const emailAlreadyExists = await this.repository.findByEmail(email)
    if (emailAlreadyExists) {
      throw new AppError('Email already exists', 400)
    }

    const salt = genSaltSync(10)
    const hash = hashSync(password, salt)

    const user = await this.repository.save({
      name,
      email,
      age,
      password: hash,
    })
    return user
  }
}

export { CreateUserService }
