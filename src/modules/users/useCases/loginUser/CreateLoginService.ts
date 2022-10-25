import { compare } from 'bcrypt'
import { config } from 'dotenv'
import { sign } from 'jsonwebtoken'
import { User } from '../../entities/User'
import { IUsersRepositories } from '../../repositories/IUsersRepositories'

class CreateLoginService {
  private readonly repository: IUsersRepositories

  constructor(repository: IUsersRepositories) {
    this.repository = repository
  }

  async execute(email: string, password: string): Promise<string | undefined> {
    config()
    const user = (await this.repository.findByEmail(email)) as User

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
