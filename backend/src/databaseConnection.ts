/* eslint-disable no-undef */
import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import { User } from './modules/users/entities/User'
import { join } from 'path'
import { Task } from './modules/tasks/entities/Task'

const createConnection = (host: string = 'tasksdb'): DataSource => {
  dotenv.config()
  const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: [User, Task],
    migrations: [join(__dirname, 'migrations/**/*.ts')],
  }

  const AppDataSource = new DataSource(dataSourceOptions)

  AppDataSource.initialize().catch((error) => {
    console.error('Unable to connect to the database:', error)
  })
  return AppDataSource
}

export { createConnection }
