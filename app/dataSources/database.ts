import { AsyncDatabase } from 'promised-sqlite3'

const db = AsyncDatabase.open('db.db')

export default db
