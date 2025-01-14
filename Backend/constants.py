from dotenv import load_dotenv
import os

load_dotenv()
SERVER_URL = 'localhost'
PORT = 8900
ENV = 'dev'
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

if GEMINI_API_KEY:
    print(f"GEMINI_API_KEY loaded: {GEMINI_API_KEY}")
else:
    print("GEMINI_API_KEY is not set or not found.")
