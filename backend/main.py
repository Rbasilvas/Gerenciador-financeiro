from fastapi import FastAPI
from backend.routes.financeiro import router as financeiro_router

app = FastAPI()

app.include_router(financeiro_router)