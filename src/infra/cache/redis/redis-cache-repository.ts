import { CacheRepository } from '../cache-repository'
import { RedisService } from './redis.service'

export class RedisCacheRepository implements CacheRepository {
  constructor(private redis: RedisService) {}

  async set(key: string, value: string) {
    await this.redis.set(key, value, 'EX', 60 * 15) // 15min
  }

  async get(key: string) {
    return this.redis.get(key)
  }

  async delete(key: string) {
    await this.redis.del(key)
  }
}
