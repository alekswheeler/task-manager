import { Repository } from 'typeorm'
import { ICreateTaskDTO } from '../../dtos/createTaskDTO'
import { Task } from '../../entities/Task'
import { ITasksRepositories } from '../ITasksRepositories'

class TasksRepositories implements ITasksRepositories {
  private repository: Repository<Task>

  constructor(repository: Repository<Task>) {
    this.repository = repository
  }

  async save(data: ICreateTaskDTO): Promise<Task | undefined> {
    const taskAlreadyExists = await this.findByTitle(data.title)

    if (taskAlreadyExists) {
      return undefined
    }

    return this.repository.save(data)
  }

  async findByTitle(title: string): Promise<Task | undefined> {
    const task = await this.repository.findOne({
      where: {
        title,
      },
    })

    if (!task) {
      return undefined
    }

    return task
  }

  list(): Promise<Task[]> {
    throw new Error('Method not implemented.')
  }

  delete(title: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export { TasksRepositories }
