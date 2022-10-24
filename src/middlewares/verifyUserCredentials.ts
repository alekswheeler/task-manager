import { Request, Response, NextFunction } from 'express'

const verifyUserCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, age, password } = req.body

  const requiredFields = []
  if (!name) {
    requiredFields.push('name')
  }
  if (!email) {
    requiredFields.push('email')
  }
  if (!age) {
    requiredFields.push('age')
  }
  if (!password) {
    requiredFields.push('password')
  }

  if (requiredFields.length !== 0) {
    return res
      .status(400)
      .json({ error: `missing fields are requireds: ${requiredFields}` })
  }

  return next()
}

export { verifyUserCredentials }
