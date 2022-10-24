import { compare } from 'bcrypt'
import { config } from 'dotenv'
import { sign } from 'jsonwebtoken'
import { AppDataSource } from '../../dataSourceInstace'
import { User } from '../../entities/User'
import { UsersRepositories } from '../../repositories/implementations/usersRepositories'

class CreateLoginService {
  async execute(email: string, password: string): Promise<string | undefined> {
    const usersRepositories = new UsersRepositories(
      AppDataSource.getRepository(User),
    )

    config()
    const user = (await usersRepositories.findByEmail(email)) as User

    if (!user) {
      return undefined
    }
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return undefined
    }
    const token = sign(
      { name: user.name, email },
      process.env.SECRET as string,
      {
        expiresIn: '1h',
      },
    )
    return token
  }
}

export { CreateLoginService }
