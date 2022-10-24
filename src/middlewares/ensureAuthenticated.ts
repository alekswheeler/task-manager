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

  const decode = verify(token, process.env.SECRET as string) as {
    name: string
    email: string
  }

  req.name = decode.name
  req.email = decode.email
  return next()
}

export { ensureAuthenticated }
