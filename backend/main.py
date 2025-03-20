from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class StoryInput(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_story(data: StoryInput):
    response = f"AI-generated continuation for: {data.prompt}"
    return {"story": response}
