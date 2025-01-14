from pydantic import BaseModel
from typing import ClassVar

class ImageData(BaseModel):
    image:str
    dict_for_vars: ClassVar[dict] = {}