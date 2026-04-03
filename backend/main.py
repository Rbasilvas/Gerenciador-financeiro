from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# -----------------------------
# MODELO DE DADOS
# -----------------------------
class Divida(BaseModel):
    descricao: str
    parcelas: int

class DadosFinanceiros(BaseModel):
    nome: str = ""
    mes: str
    salario: float
    extras: float
    decimo: float
    plr: float
    ferias: float
    investimento: float
    dividas: List[Divida]

# -----------------------------
# "BANCO" TEMPORÁRIO
# -----------------------------
banco_dados = []

# -----------------------------
# ROTAS
# -----------------------------

@app.get("/")
def home():
    return {"mensagem": "API funcionando"}

@app.post("/salvar")
def salvar_dados(dados: DadosFinanceiros):
    banco_dados.append(dados)
    return {"status": "salvo com sucesso"}

@app.get("/dados")
def listar_dados():
    return banco_dados