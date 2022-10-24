import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class ListTasksService {
  async execute(email: string): Promise<Task[]> {
    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const tasks = await tasksRepositories.list(email)

    return tasks
  }
}

export { ListTasksService }
