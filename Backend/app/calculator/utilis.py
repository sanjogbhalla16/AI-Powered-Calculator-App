import google.generativeai as genai
import ast # Used to safely parse strings (like API responses) into Python objects.
import json
from PIL import Image
from constants import GEMINI_API_KEY

#this will take the API key 
genai.configure(api_key="GEMINI_API_KEY")

def analyze_image(img: Image, dict_of_vars: dict):
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    dict_of_vars_str = json.dumps(dict_of_vars, ensure_ascii=False)
    prompt = (
        f"You are an advanced AI designed to solve mathematical problems, including expressions, equations, and graphical scenarios. "
    f"Your task is to analyze a provided image and return the solution in a structured format. "
    f"Follow these rules strictly: "
    f"1. For mathematical expressions, use the PEMDAS rule: "
    f"   - Parentheses > Exponents > Multiplication/Division (left-to-right) > Addition/Subtraction (left-to-right). "
    f"2. For equations, solve for all variables and return their values. "
    f"3. If variables are defined in a dictionary (e.g., x=5), use these values: {dict_of_vars_str}. "
    f"4. For graphical problems (e.g., geometry or real-world scenarios), interpret the image context and calculate the solution. "
    f"5. For abstract concepts in drawings, describe the meaning clearly and concisely. "
    f"Return all answers as a list of dictionaries, with this format: "
    f"[{{'expr': '<problem statement>', 'result': <solution>, 'assign': <True/False>}}]. "
    f"Examples: "
    f"1. Input Expression: 2 + 3 * 4 "
    f"   Steps: (3 * 4) = 12, then 2 + 12 = 14. "
    f"   Output: [{{'expr': '2 + 3 * 4', 'result': 14}}]. "
    f"2. Input Equation: x^2 - 4 = 0 "
    f"   Solve: x = ±2. "
    f"   Output: [{{'expr': 'x', 'result': [2, -2], 'assign': True}}]. "
    f"3. Graphical Problem: A triangle with sides 3, 4, and 5; find the area. "
    f"   Steps: Use Heron’s formula. "
    f"   Output: [{{'expr': 'Area of triangle', 'result': 6}}]. "
    f"Analyze the image accurately, apply the rules, and respond only with the structured output as specified."
)
    #Sends the prompt and image to the AI model for processing.
    response = model.generate_content([prompt, img])
    print(response.text)
    answers = []
    try:
        answers = ast.literal_eval(response.text) #Uses ast.literal_eval to safely convert the response (a string) into a Python list of dictionaries.
    except Exception as e:
        print(f"Error in parsing response from Gemini API: {e}")
    print('returned answer ', answers)
    for answer in answers:
        if 'assign' in answer:
            answer['assign'] = True
        else:
            answer['assign'] = False
    return answers