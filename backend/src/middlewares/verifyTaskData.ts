/* eslint-disable camelcase */
import { NextFunction, Request, Response } from 'express'
import { createTaskSchema } from '../modules/tasks/schemas/createTaskSchema'

const verifyTaskData = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, due_date } = req.body

  const { error } = createTaskSchema.validate({
    title,
    description,
    due_date,
  })

  if (error) {
    return res.status(400).json({ error: error.message })
  }

  return next()
}

export { verifyTaskData }
