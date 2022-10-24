import { UsersRepositories } from '../../repositories/implementations/usersRepositories'
import { ICreateUserDTO } from '../../dtos/createUserDTO'
import { User } from '../../entities/User'
import { genSaltSync, hashSync } from 'bcrypt'
import { AppDataSource } from '../../dataSourceInstace'

class CreateUserService {
  async execute({
    name,
    email,
    password,
    age,
  }: ICreateUserDTO): Promise<User | undefined> {
    const usersRepository = new UsersRepositories(
      AppDataSource.getRepository(User),
    )

    const emailAlreadyExists = await usersRepository.findByEmail(email)
    if (emailAlreadyExists) {
      return undefined
    }

    const salt = genSaltSync(10)
    const hash = hashSync(password, salt)

    const user = await usersRepository.save({
      name,
      email,
      age,
      password: hash,
    })
    return user
  }
}

export { CreateUserService }
