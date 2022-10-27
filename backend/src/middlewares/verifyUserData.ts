import { NextFunction, Request, Response } from 'express'
import { createUserSchema } from '../modules/users/schemas/createUserSchema'

const verifyUserData = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, age, password } = req.body

  const { error } = createUserSchema.validate({
    name,
    email,
    age,
    password,
  })

  if (error) {
    console.log(error)
    return res.status(400).json({ error: error.details })
  }

  return next()
}

export { verifyUserData }
