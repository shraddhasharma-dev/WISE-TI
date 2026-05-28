// src/config/redis.js
import Ioredis from 'ioredis';

export const redisConnection = new Ioredis(process.env.REDIS_URL || 'redis://127.0.0.1:6379', {
  maxRetriesPerRequest: null,
});