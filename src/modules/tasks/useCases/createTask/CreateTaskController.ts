/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'
import { CreateTaskService } from './CreateTaskService'

class CreateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, time, due_date } = request.body

    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )
    const createTaskService = new CreateTaskService(tasksRepositories)

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
