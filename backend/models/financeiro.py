from pydantic import BaseModel
from typing import List


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