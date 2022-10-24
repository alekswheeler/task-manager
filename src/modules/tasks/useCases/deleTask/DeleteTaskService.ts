import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class DeleteTaskService {
  async execute(title: string): Promise<boolean> {
    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const taskDeleted = await tasksRepositories.delete(title)
    if (!taskDeleted) {
      return false
    }

    return true
  }
}

export { DeleteTaskService }
