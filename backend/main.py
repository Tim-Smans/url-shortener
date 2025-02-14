from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from shorten_url import get_long_url, save_url
from pydantic import BaseModel

app = FastAPI()

 # Allow origin for my frontend.
origins = [
    "http://localhost:3000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class URLRequest(BaseModel):
    long_url: str

@app.post("/shorten/")
def shorten_url(request: URLRequest):
  short_url = save_url(request.long_url)
  return {"short_url": short_url}


@app.get("/{short_code}")
def redirect_to_url(short_code: str):
    long_url = get_long_url(short_code)
    if long_url:
        return {"original_url": long_url}
    return {"error": "URL not found"}