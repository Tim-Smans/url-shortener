from database import redis_client
import random
import string

def generate_short_code(length=6):
  return ''.join(random.choices(string.ascii_letters + string.digits, k=length))


def save_url(long_url: str):
  short_code = generate_short_code()
  redis_client.set(short_code, long_url)
  return short_code

def get_long_url(short_code: str):
  return redis_client.get(short_code)
  
  
