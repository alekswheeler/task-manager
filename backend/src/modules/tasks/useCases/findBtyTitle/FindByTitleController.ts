import { Request, Response } from 'express'
import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'
import { FindByTitleService } from './FindByTitleService'

class FindByTitleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.params
    const email = request.email

    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const findByTitleService = new FindByTitleService(tasksRepositories)

    const task = await findByTitleService.execute(title, email)

    if (!task) {
      return response.status(404).json({ error: 'Task not found' })
    }

    return response.json(task)
  }
}

export { FindByTitleController }
