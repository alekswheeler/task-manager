import { Request, Response } from 'express'
import { CreateLoginService } from './CreateLoginService'

interface ICreateLoginDTO {
  email: string
  password: string
}

class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: ICreateLoginDTO = request.body
    const createLoginService = new CreateLoginService()

    const token = await createLoginService.execute(email, password)

    if (!token) {
      return response.status(401).json({ error: 'Email or password incorrect' })
    }
    return response.status(201).json({ token })
  }
}

export { CreateLoginController }
