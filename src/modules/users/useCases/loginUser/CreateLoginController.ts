import { Request, Response } from 'express'
import { AppDataSource } from '../../dataSourceInstace'
import { User } from '../../entities/User'
import { UsersRepositories } from '../../repositories/implementations/usersRepositories'
import { CreateLoginService } from './CreateLoginService'

interface ICreateLoginDTO {
  email: string
  password: string
}

class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: ICreateLoginDTO = request.body

    const usersRepositories = new UsersRepositories(
      AppDataSource.getRepository(User),
    )

    const createLoginService = new CreateLoginService(usersRepositories)

    const token = await createLoginService.execute(email, password)

    if (!token) {
      return response.status(401).json({ error: 'Email or password incorrect' })
    }
    return response.status(201).json({ token })
  }
}

export { CreateLoginController }
