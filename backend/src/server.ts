import 'reflect-metadata'
import 'express-async-errors'
import { router } from './routes'
import express, { NextFunction, Request, Response } from 'express'
import { AppError } from './utils/AppError'

const app = express()

app.use(express.json())

app.use(router)

app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message })
  }
  return res.status(500).json({ message: 'internal server error' }).send()
})

app.listen(3333, () => {
  console.log('Server started on port 3333!!')
})
