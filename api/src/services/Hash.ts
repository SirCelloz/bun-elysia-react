import bcrypt from 'bcrypt'
import HashInterface from '../interfaces/Hash';

export default class Hash implements HashInterface {
  hash(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(password, salt)
  }

  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}