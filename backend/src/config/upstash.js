import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://verified-mosquito-152595.upstash.io',
  token: 'gQAAAAAAAlQTAAIgcDJiMDQxYTc0YzViY2I0ZjExYmViZTVkMDE0NTI5OGNmYw',
})

await redis.set("foo", "bar");
await redis.get("foo");