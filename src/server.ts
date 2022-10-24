import express from 'express'
import 'reflect-metadata'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})

/**
 *
 * Tasks
 ** Criar uma tarefa
 * Editar uma tarefa
 ** Remover uma tarefa
 **  catch do error
 **  verificar se a tarefa existe
 *^ Visualização (dia, semana, mês)
 * Busca por tarefa (título)
 *
 */
