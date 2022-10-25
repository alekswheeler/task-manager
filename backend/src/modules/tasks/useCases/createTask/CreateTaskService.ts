/* eslint-disable camelcase */
import { ICreateTaskDTO } from '../../dtos/createTaskDTO'
import { Task } from '../../entities/Task'
import { ITasksRepositories } from '../../repositories/ITasksRepositories'

class CreateTaskService {
  private readonly tasksRepositories: ITasksRepositories

  constructor(repository: ITasksRepositories) {
    this.tasksRepositories = repository
  }

  async execute({
    title,
    description,
    due_date,
    time,
    email,
  }: ICreateTaskDTO): Promise<Task | undefined> {
    const data: ICreateTaskDTO = {
      title,
      description,
      due_date,
      email,
      time,
    }

    const task = await this.tasksRepositories.save(data)

    if (!task) {
      return undefined
    }

    return task
  }
}

export { CreateTaskService }
