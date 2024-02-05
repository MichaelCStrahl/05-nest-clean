import { HashComparer } from '@/domain/forum/application/cryptography/hash-compare'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LENGTH = 8

  async hash(plain: string) {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  async compare(plain: string, hash: string) {
    return compare(plain, hash)
  }
}
