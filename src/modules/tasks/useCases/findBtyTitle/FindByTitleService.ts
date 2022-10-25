import { AppDataSource } from '../../dataSourceInstance'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class FindByTitleService {
  async execute(title: string, email: string): Promise<Task | undefined> {
    const tasksRepository = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const task = await tasksRepository.findByTitle(title)

    if (task) {
      if (task.user_email === email) {
        return task
      }
    }

    return undefined
  }
}

export { FindByTitleService }
