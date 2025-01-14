#contextlib from Python's standard library is often used to manage resources efficiently, such as database connections, file handles, or other resources that require proper setup and teardown.
#Specifically for asynchronous resource management.
#Ideal for use with FastAPI, as FastAPI heavily relies on asynchronous operations.
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from constants import SERVER_URL, PORT, ENV
import uvicorn
from app.calculator.route import router as calculator_router

#the lifespan refers to the lifecycle of the application. It allows you to define tasks or logic that should run when the application starts (setup) and stops (cleanup).
@asynccontextmanager
async def lifespan(app: FastAPI):
    yield

app = FastAPI(lifespan=lifespan)

#(Cross-Origin Resource Sharing Middleware) is used to manage and control how resources on your FastAPI backend can be accessed by client applications running on different origins.
# Add CORSMiddleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello, Server is enabled!"}

app.include_router(calculator_router,prefix="/calculate", tags=["calculate"])


#This Python code snippet is commonly used to start a FastAPI application using Uvicorn, an ASGI (Asynchronous Server Gateway Interface) server.
#Enables auto-reload for development mode (ENV == "dev").
#Auto-reload automatically restarts the server whenever code changes are detected.

#This line ensures the code inside this block runs only if the script is executed directly (e.g., python main.py).
if __name__ == "__main__":
    #uvicorn.run(app, host="0.0.0.0", port=PORT)
    uvicorn.run("main:app", host=SERVER_URL, port=int(PORT), reload=(ENV == "dev"))