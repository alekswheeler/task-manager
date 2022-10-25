import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class ListTasksService {
  private readonly tasksRepositories: TasksRepositories

  constructor(repository: TasksRepositories) {
    this.tasksRepositories = repository
  }

  async execute(email: string): Promise<Task[]> {
    const tasks = await this.tasksRepositories.list(email)

    return tasks
  }
}

export { ListTasksService }
