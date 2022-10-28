import { Request, Response } from 'express'
import { AppDataSource } from '../../dataSourceInstance'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'
import { DeleteTaskService } from './DeleteTaskService'
import { Task } from '../../entities/Task'

class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { title } = request.params

    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const deleteTaskService = new DeleteTaskService(tasksRepositories)

    await deleteTaskService.execute(title)

    return response.status(200).json({ message: 'task deleted' })
  }
}

export { DeleteTaskController }
