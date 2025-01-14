#we need to create routes where we hit the api request to get the text output
from fastapi import APIRouter
import base64 #A Python library for encoding and decoding data in Base64 format. Commonly used to handle image or binary data in API communication.
from io import BytesIO #A module from the io library that provides a way to handle binary data (like images) in memory as a file-like object.
from schema import ImageData
from app.calculator.utilis import analyze_image
from PIL import Image

router = APIRouter()

@router.post('')
async def analyze(data: ImageData):
    image_data = base64.b64decode(data.image.split(',')[1]) #Assumes the Base64 string starts with metadata (e.g., data:image/png;base64,). Splits the string and extracts the actual image data.
    #Decodes the Base64-encoded image string into raw binary data.
    image_bytes = BytesIO(image_data) #Converts the raw binary data into an in-memory file-like object using BytesIO.
    image = Image.open(image_bytes)#Opens the in-memory image file using Pillow (PIL.Image).
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
