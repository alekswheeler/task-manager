import { createConnection } from './databaseConnection'

const datasource = createConnection('localhost')
datasource.initialize()

export { datasource }
