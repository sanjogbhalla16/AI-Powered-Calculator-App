from pydantic import BaseModel

class ImageData(BaseModel):
    image:str
    dict_for_var = dict