import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class FindByTitleService {
  private readonly tasksRepositories: TasksRepositories

  constructor(repository: TasksRepositories) {
    this.tasksRepositories = repository
  }

  async execute(title: string, email: string): Promise<Task | undefined> {
    const task = await this.tasksRepositories.findByTitle(title)

    if (task) {
      if (task.user_email === email) {
        return task
      }
    }

    return undefined
  }
}

export { FindByTitleService }
