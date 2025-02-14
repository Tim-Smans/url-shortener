import redis
import os

# Connect to Redis
redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = os.getenv("REDIS_PORT", 6379)

redis_client = redis.Redis(host=redis_host, port=redis_port, decode_responses=True)

# Test the connection
try:
    redis_client.ping()
    print("Successfully connected to Redis!")
except redis.exceptions.ConnectionError:
    print("Redis connection failed!")
