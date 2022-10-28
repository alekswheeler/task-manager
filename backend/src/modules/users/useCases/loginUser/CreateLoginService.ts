import { compare } from 'bcrypt'
import { config } from 'dotenv'
import { sign } from 'jsonwebtoken'
import { AppError } from '../../../../utils/AppError'
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

    const passwordMatch = await compare(password, user.password)

    if (!user || !passwordMatch) {
      throw new AppError('Email or password incorrect', 401)
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
