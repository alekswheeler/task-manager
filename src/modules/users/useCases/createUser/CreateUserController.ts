import { Request, Response } from 'express'
import { CreateUserService } from './CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, age, password } = req.body

    const createUserService = new CreateUserService()

    const user = await createUserService
      .execute({ name, email, age, password })
      .catch((error) => {
        console.error(error)
        return res.status(500).json({ message: 'internal server error' })
      })

    if (!user) {
      return res.status(422).json({ error: 'user already exists' })
    }

    return res.status(200).json(user)
  }
}

export { CreateUserController }
