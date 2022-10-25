import { Request, Response } from 'express'
import { FindByTitleService } from './FindByTitleService'

class FindByTitleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.params
    const email = request.email

    const findByTitleService = new FindByTitleService()

    const task = await findByTitleService.execute(title, email)

    if (!task) {
      return response.status(404).json({ error: 'Task not found' })
    }

    return response.json(task)
  }
}

export { FindByTitleController }
