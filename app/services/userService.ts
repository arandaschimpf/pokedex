import database from '../dataSources/database'
import { createHash } from 'node:crypto'

interface User {
  username:string
  contraseña:string
  salt:string
}



const db = await database

function sha256(content: string) {  
  return createHash('sha256').update(content).digest('hex')
}

export async function registerUser(username: string, password: string) {
  

  const existingusername = await db.get('SELECT * FROM Usuario WHERE username = ?', [username])
  if (existingusername) return false

  const salt = sha256(Math.random().toString())
  const hash = sha256(password + salt)

  try {
    await db.run('INSERT INTO Usuario(username, contraseña, salt) VALUES(?, ?, ?)', [username, hash, salt])
    return true
  } catch (error) {
    return false
  }
}

export async function loginUser(username: string, password: string)
{
  const db = await database
  
  const user = await db.get<User>('SELECT * FROM Usuario WHERE username = ?', [username])
  if (!user) {
    return false
  }
  const salt = user.salt
  const hash = user.contraseña
  const newHash = sha256(password + salt)
  return hash === newHash
}