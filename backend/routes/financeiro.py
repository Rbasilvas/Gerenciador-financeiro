from fastapi import APIRouter
from backend.models.financeiro import DadosFinanceiros

router = APIRouter()

banco_dados = []


@router.get("/")
def home():
    return {"mensagem": "API funcionando"}


@router.post("/salvar")
def salvar_dados(dados: DadosFinanceiros):
    banco_dados.append(dados)
    return {"status": "salvo com sucesso"}


@router.get("/dados")
def listar_dados():
    return banco_dados