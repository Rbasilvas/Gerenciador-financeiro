from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
import os
import requests
from backend.models.financeiro import DadosFinanceiros
load_dotenv()

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
@router.get("/investimentos/fii/{ticker}")
def buscar_fii(ticker: str):
    api_key = os.getenv("BRAPI_API_KEY")

    if not api_key:
        raise HTTPException(status_code=500, detail="API KEY não encontrada no .env")

    url = f"https://brapi.dev/api/quote/{ticker}"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }

    try:
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    if "results" not in data or len(data["results"]) == 0:
        raise HTTPException(status_code=404, detail="FII não encontrado")

    item = data["results"][0]

    return {
        "ticker": item.get("symbol"),
        "preco": item.get("regularMarketPrice"),
        "nome": item.get("shortName"),
        "dados_completos": item
    }