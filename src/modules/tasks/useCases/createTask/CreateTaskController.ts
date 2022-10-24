/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { CreateTaskService } from './CreateTaskService'

class CreateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, time, due_date } = request.body

    const createTaskService = new CreateTaskService()

    const task = await createTaskService
      .execute({
        title,
        description,
        due_date,
        time,
        email: request.email,
      })
      .catch((error) => {
        console.error(error)
        return response.status(500).json({ error: 'Internal server error' })
      })

    if (!task) {
      return response.status(400).json({ error: 'Task already exists' })
    }

    return response.status(201).json(task)
  }
}

export { CreateTaskController }
