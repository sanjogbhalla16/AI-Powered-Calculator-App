from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import base64 #A Python library for encoding and decoding data in Base64 format. 
from io import BytesIO #A module from the io library that provides a way to handle binary data (like images) in memory as a file-like object.
from schema import ImageData
from app.calculator.utilis import analyze_image
from PIL import Image

router = APIRouter()

@router.post('/analyze')
async def analyze(data: ImageData):
    image_data = base64.b64decode(data.image.split(',')[1]) #Assumes the Base64 string starts with metadata (e.g., data:image/png;base64,). Splits the string and extracts the actual image data.
    #Decodes the Base64-encoded image string into raw binary data.
    image_bytes = BytesIO(image_data) #Converts the raw binary data into an in-memory file-like object using BytesIO.
    image = Image.open(image_bytes)#Opens the in-memory image file using Pillow (PIL.Image).Because the image is manipulated in file based memory
    responses = analyze_image(image, dict_of_vars=data.dict_of_vars) #Uses the dict_for_vars dictionary (passed from ImageData) to analyze the image content.
    data = []
    print(responses)
    for response in responses:
        data.append(response)
    print('response in route' , responses) #to test if the response is coming or not 
    #return data into json format
    return {
        'message' : 'Image Processed Successfully',
        'type': "success",
        "data" : data,
    }
    
#now we include the class ConnectionManager for websockets
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []
    
    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
    
    async def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        
    async def send_personal_message(self, message:str, websocket:WebSocket):
        await websocket.send_text(message)
    
    async def broadcast (self, message:str):
        for connection in self.active_connections:
            await connection.send_text(message)
            


        
    

@router.websocket("/ws")
async def websocket_endpoint(websocket:WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_personal_message(f"You wrote: {data}", websocket)
            await manager.broadcast(f"Client #{client_id} says: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} left the chat")