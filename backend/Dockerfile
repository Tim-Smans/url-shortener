FROM python:latest
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt

# Exposing the port
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]