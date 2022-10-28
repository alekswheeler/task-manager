import { AppError } from '../../../../utils/AppError'
import { ITasksRepositories } from '../../repositories/ITasksRepositories'

class DeleteTaskService {
  private readonly repository: ITasksRepositories

  constructor(repository: ITasksRepositories) {
    this.repository = repository
  }

  async execute(title: string): Promise<boolean> {
    const taskDeleted = await this.repository.delete(title)
    if (!taskDeleted) {
      throw new AppError('Task not found', 404)
    }

    return true
  }
}

export { DeleteTaskService }
