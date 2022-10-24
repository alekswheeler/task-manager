/* eslint-disable camelcase */
import { AppDataSource } from '../../dataSourceInstance'
import { ICreateTaskDTO } from '../../dtos/createTaskDTO'
import { Task } from '../../entities/Task'
import { TasksRepositories } from '../../repositories/implementations/tasksRepositories'

class CreateTaskService {
  async execute({
    title,
    description,
    due_date,
    time,
    email,
  }: ICreateTaskDTO): Promise<Task | undefined> {
    const tasksRepositories = new TasksRepositories(
      AppDataSource.getRepository(Task),
    )

    const data: ICreateTaskDTO = {
      title,
      description,
      due_date,
      email,
      time,
    }

    const task = await tasksRepositories.save(data)

    if (!task) {
      return undefined
    }

    return task
  }
}

export { CreateTaskService }
