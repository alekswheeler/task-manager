import { config } from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

const ensureAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  config()
  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const [, token] = authorization.split(' ')

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  verify(token, process.env.SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const { name, email } = decoded as { name: string; email: string }
    req.name = name
    req.email = email

    return next()
  })
}

export { ensureAuthenticated }
