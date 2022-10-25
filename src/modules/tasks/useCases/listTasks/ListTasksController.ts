import { Request, Response } from 'express'
import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'
import { ListTasksService } from './ListTasksService'

class ListTasksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const email = request.email

    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const listTasksService = new ListTasksService(tasksRepositories)

    const tasks = await listTasksService.execute(email).catch((error) => {
      console.error(error)
      return response.status(500).json({ error: 'Internal server error' })
    })

    return response.status(200).json(tasks)
  }
}

export { ListTasksController }
