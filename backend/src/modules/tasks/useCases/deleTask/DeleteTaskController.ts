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

    const serviceResult = await deleteTaskService
      .execute(title)
      .catch((error) => {
        console.error(error)
        return response.status(500).json({ error: 'internal server error' })
      })

    if (!serviceResult) {
      return response.status(404).json({ error: 'task not found' })
    }

    return response.status(200).json({ message: 'task deleted' })
  }
}

export { DeleteTaskController }
