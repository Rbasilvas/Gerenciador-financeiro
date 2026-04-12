const campoNome1 = document.getElementById("nome1");
const campoNome2 = document.getElementById("nome2");

const ano1 = document.getElementById("ano1");
const mes1 = document.getElementById("mes1");
const ano2 = document.getElementById("ano2");
const mes2 = document.getElementById("mes2");

const tituloPessoa1 = document.getElementById("titulo-pessoa1");
const tituloPessoa2 = document.getElementById("titulo-pessoa2");

const salario1 = document.getElementById("salario1");
const extras1 = document.getElementById("extras1");
const decimo1 = document.getElementById("decimo1");
const plr1 = document.getElementById("plr1");
const ferias1 = document.getElementById("ferias1");
const investimento1 = document.getElementById("investimento1");
const totalEntradas1 = document.getElementById("totalEntradas1");
const totalDividas1 = document.getElementById("totalDividas1");
const total1 = document.getElementById("total1");

const salario2 = document.getElementById("salario2");
const extras2 = document.getElementById("extras2");
const decimo2 = document.getElementById("decimo2");
const plr2 = document.getElementById("plr2");
const ferias2 = document.getElementById("ferias2");
const investimento2 = document.getElementById("investimento2");
const totalEntradas2 = document.getElementById("totalEntradas2");
const totalDividas2 = document.getElementById("totalDividas2");
const total2 = document.getElementById("total2");

const listaEntradas1 = document.getElementById("listaEntradas1");
const listaEntradas2 = document.getElementById("listaEntradas2");
const listaDividas1 = document.getElementById("listaDividas1");
const listaDividas2 = document.getElementById("listaDividas2");

const botaoEntrada1 = document.getElementById("botaoEntrada1");
const botaoRemoverEntrada1 = document.getElementById("botaoRemoverEntrada1");
const botaoEntrada2 = document.getElementById("botaoEntrada2");
const botaoRemoverEntrada2 = document.getElementById("botaoRemoverEntrada2");

const botaoDivida1 = document.getElementById("botaoDivida1");
const botaoRemoverDivida1 = document.getElementById("botaoRemoverDivida1");
const botaoDivida2 = document.getElementById("botaoDivida2");
const botaoRemoverDivida2 = document.getElementById("botaoRemoverDivida2");

const botoesAbas = document.querySelectorAll(".aba");
const conteudosAbas = document.querySelectorAll(".tab-conteudo");

const botaoSalvar = document.getElementById("botaoSalvar");
const botaoTopo = document.getElementById("botaoTopo");

const listaFiis = document.getElementById("listaFiis");
const botaoAdicionarFii = document.getElementById("botaoAdicionarFii");
const botaoRemoverFii = document.getElementById("botaoRemoverFii");
const totalDividendosFii = document.getElementById("totalDividendosFii");

const mapaTiposFiis = {
    KNCR11: "Papel",
    KNIP11: "Papel",
    MCCI11: "Papel",
    RBRY11: "Papel",
    RBRR11: "Papel",
    CPTS11: "Papel",
    MXRF11: "Papel",
    VGHF11: "Híbrido",
    KNSC11: "Papel",
    VGIR11: "Papel",
    HGCR11: "Papel",
    BTCI11: "Papel",
    VRTA11: "Papel",
    PLCR11: "Papel",
    CVBI11: "Papel",
    VCJR11: "Papel",
    HABT11: "Papel",
    PORD11: "Papel",
    HGLG11: "Tijolo",
    BTLG11: "Tijolo",
    BRCO11: "Tijolo",
    VILG11: "Tijolo",
    XPLG11: "Tijolo",
    GARE11: "Tijolo",
    TRXF11: "Tijolo",
    GGRC11: "Tijolo",
    ALZR11: "Híbrido",
    LVBI11: "Tijolo",
    RBRL11: "Tijolo",
    XPML11: "Tijolo",
    VISC11: "Tijolo",
    HGBS11: "Tijolo",
    HGRU11: "Tijolo",
    MALL11: "Tijolo",
    HSML11: "Tijolo",
    BBRC11: "Tijolo",
    PVBI11: "Tijolo",
    HGPO11: "Tijolo",
    KNRI11: "Híbrido",
    JSRE11: "Híbrido",
    BRCR11: "Tijolo",
    RCRB11: "Tijolo",
    VINO11: "Tijolo",
    TEPP11: "Tijolo",
    BCFF11: "FOF",
    HFOF11: "FOF",
    RBRF11: "FOF",
    KFOF11: "FOF",
    TGAR11: "Desenvolvimento",
    RZTR11: "Agro"
};

function atualizarTitulo(campo, titulo) {
    if (!campo || !titulo) return;

    const nome = campo.value.trim();

    if (nome === "") {
        titulo.textContent = "Novo Perfil";
    } else {
        titulo.textContent = `Finanças de ${nome}`;
    }
}

function converterNumero(valor) {
    return parseFloat(valor) || 0;
}

function formatarMoeda(valor) {
    return (valor || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function criarCampoEntrada(numeroPerfil) {
    const div = document.createElement("div");
    div.className = "entrada-item lista-item";

    div.innerHTML = `
        <input type="text" placeholder="Descrição da entrada extra">
        <input type="number" class="entrada-extra-valor-${numeroPerfil}" placeholder="Valor">
    `;

    const campoValor = div.querySelector(`.entrada-extra-valor-${numeroPerfil}`);

    campoValor.addEventListener("input", function () {
        if (numeroPerfil === 1) {
            calcularPerfil1();
        } else {
            calcularPerfil2();
        }
    });

    return div;
}

function criarCampoDivida(numeroPerfil) {
    const div = document.createElement("div");
    div.className = "divida-item lista-item";

    div.innerHTML = `
        <input type="text" placeholder="Descrição da dívida">
        <input type="number" class="divida-valor-${numeroPerfil}" placeholder="Valor">
        <select>
            <option value="0">0 parcelas</option>
            <option value="1">1 parcela</option>
            <option value="2">2 parcelas</option>
            <option value="3">3 parcelas</option>
            <option value="4">4 parcelas</option>
            <option value="5">5 parcelas</option>
            <option value="6">6 parcelas</option>
            <option value="7">7 parcelas</option>
            <option value="8">8 parcelas</option>
            <option value="9">9 parcelas</option>
            <option value="10">10 parcelas</option>
            <option value="11">11 parcelas</option>
            <option value="12">12 parcelas</option>
        </select>
    `;

    const campoValor = div.querySelector(`.divida-valor-${numeroPerfil}`);

    campoValor.addEventListener("input", function () {
        if (numeroPerfil === 1) {
            calcularPerfil1();
        } else {
            calcularPerfil2();
        }
    });

    return div;
}

function somarEntradasExtras(numeroPerfil) {
    const campos = document.querySelectorAll(`.entrada-extra-valor-${numeroPerfil}`);
    let soma = 0;

    campos.forEach((campo) => {
        soma += converterNumero(campo.value);
    });

    return soma;
}

function somarDividas(numeroPerfil) {
    const campos = document.querySelectorAll(`.divida-valor-${numeroPerfil}`);
    let soma = 0;

    campos.forEach((campo) => {
        soma += converterNumero(campo.value);
    });

    return soma;
}

function calcularPerfil1() {
    if (!salario1 || !extras1 || !decimo1 || !plr1 || !ferias1 || !investimento1) return;

    const entradasFixas =
        converterNumero(salario1.value) +
        converterNumero(extras1.value) +
        converterNumero(decimo1.value) +
        converterNumero(plr1.value) +
        converterNumero(ferias1.value);

    const entradasExtras = somarEntradasExtras(1);
    const entradas = entradasFixas + entradasExtras;

    const dividas = somarDividas(1);
    const investimento = converterNumero(investimento1.value);
    const totalGeral = entradas - dividas - investimento;

    if (totalEntradas1) {
        totalEntradas1.innerHTML = `<strong>Total de entradas:</strong> ${formatarMoeda(entradas)}`;
    }

    if (totalDividas1) {
        totalDividas1.innerHTML = `<strong>Total de dívidas:</strong> ${formatarMoeda(dividas)}`;
    }

    if (total1) {
        total1.innerHTML = `<strong>Total geral:</strong> ${formatarMoeda(totalGeral)}`;
    }
}

function calcularPerfil2() {
    if (!salario2 || !extras2 || !decimo2 || !plr2 || !ferias2 || !investimento2) return;

    const entradasFixas =
        converterNumero(salario2.value) +
        converterNumero(extras2.value) +
        converterNumero(decimo2.value) +
        converterNumero(plr2.value) +
        converterNumero(ferias2.value);

    const entradasExtras = somarEntradasExtras(2);
    const entradas = entradasFixas + entradasExtras;

    const dividas = somarDividas(2);
    const investimento = converterNumero(investimento2.value);
    const totalGeral = entradas - dividas - investimento;

    if (totalEntradas2) {
        totalEntradas2.innerHTML = `<strong>Total de entradas:</strong> ${formatarMoeda(entradas)}`;
    }

    if (totalDividas2) {
        totalDividas2.innerHTML = `<strong>Total de dívidas:</strong> ${formatarMoeda(dividas)}`;
    }

    if (total2) {
        total2.innerHTML = `<strong>Total geral:</strong> ${formatarMoeda(totalGeral)}`;
    }
}

function gerarChavePerfil(numeroPerfil) {
    if (numeroPerfil === 1) {
        return `nexus-finance-perfil1-${ano1.value}-${mes1.value}`;
    } else {
        return `nexus-finance-perfil2-${ano2.value}-${mes2.value}`;
    }
}

function coletarDadosPerfil1() {
    return {
        nome: campoNome1 ? campoNome1.value : "",
        ano: ano1 ? ano1.value : "",
        mes: mes1 ? mes1.value : "",
        salario: salario1 ? salario1.value : "",
        extras: extras1 ? extras1.value : "",
        plr: plr1 ? plr1.value : "",
        decimo: decimo1 ? decimo1.value : "",
        ferias: ferias1 ? ferias1.value : "",
        investimento: investimento1 ? investimento1.value : "",
        entradasExtras: Array.from(document.querySelectorAll(".entrada-extra-valor-1")).map((campo) => campo.value),
        dividas: Array.from(document.querySelectorAll(".divida-valor-1")).map((campo) => campo.value)
    };
}

function coletarDadosPerfil2() {
    return {
        nome: campoNome2 ? campoNome2.value : "",
        ano: ano2 ? ano2.value : "",
        mes: mes2 ? mes2.value : "",
        salario: salario2 ? salario2.value : "",
        extras: extras2 ? extras2.value : "",
        plr: plr2 ? plr2.value : "",
        decimo: decimo2 ? decimo2.value : "",
        ferias: ferias2 ? ferias2.value : "",
        investimento: investimento2 ? investimento2.value : "",
        entradasExtras: Array.from(document.querySelectorAll(".entrada-extra-valor-2")).map((campo) => campo.value),
        dividas: Array.from(document.querySelectorAll(".divida-valor-2")).map((campo) => campo.value)
    };
}

function limparLista(container) {
    if (container) {
        container.innerHTML = "";
    }
}

function preencherEntradasExtras(numeroPerfil, valores) {
    valores.forEach((valor) => {
        const novoCampo = criarCampoEntrada(numeroPerfil);

        if (numeroPerfil === 1 && listaEntradas1) {
            listaEntradas1.appendChild(novoCampo);
        } else if (numeroPerfil === 2 && listaEntradas2) {
            listaEntradas2.appendChild(novoCampo);
        }

        const campoCriado = novoCampo.querySelector(`.entrada-extra-valor-${numeroPerfil}`);
        if (campoCriado) {
            campoCriado.value = valor;
        }
    });
}

function preencherDividas(numeroPerfil, valores) {
    valores.forEach((valor) => {
        const novaDivida = criarCampoDivida(numeroPerfil);

        if (numeroPerfil === 1 && listaDividas1) {
            listaDividas1.appendChild(novaDivida);
        } else if (numeroPerfil === 2 && listaDividas2) {
            listaDividas2.appendChild(novaDivida);
        }

        const campoCriado = novaDivida.querySelector(`.divida-valor-${numeroPerfil}`);
        if (campoCriado) {
            campoCriado.value = valor;
        }
    });
}

function limparPerfil1() {
    if (campoNome1) campoNome1.value = "";
    if (salario1) salario1.value = "";
    if (extras1) extras1.value = "";
    if (plr1) plr1.value = "";
    if (decimo1) decimo1.value = "";
    if (ferias1) ferias1.value = "";
    if (investimento1) investimento1.value = "";

    limparLista(listaEntradas1);
    limparLista(listaDividas1);

    atualizarTitulo(campoNome1, tituloPessoa1);
    calcularPerfil1();
}

function limparPerfil2() {
    if (campoNome2) campoNome2.value = "";
    if (salario2) salario2.value = "";
    if (extras2) extras2.value = "";
    if (plr2) plr2.value = "";
    if (decimo2) decimo2.value = "";
    if (ferias2) ferias2.value = "";
    if (investimento2) investimento2.value = "";

    limparLista(listaEntradas2);
    limparLista(listaDividas2);

    atualizarTitulo(campoNome2, tituloPessoa2);
    calcularPerfil2();
}

function carregarPerfil1() {
    const chave = gerarChavePerfil(1);
    const dadosSalvos = localStorage.getItem(chave);

    limparPerfil1();

    if (!dadosSalvos) return;

    const dados = JSON.parse(dadosSalvos);

    if (campoNome1) campoNome1.value = dados.nome || "";
    if (salario1) salario1.value = dados.salario || "";
    if (extras1) extras1.value = dados.extras || "";
    if (plr1) plr1.value = dados.plr || "";
    if (decimo1) decimo1.value = dados.decimo || "";
    if (ferias1) ferias1.value = dados.ferias || "";
    if (investimento1) investimento1.value = dados.investimento || "";

    preencherEntradasExtras(1, dados.entradasExtras || []);
    preencherDividas(1, dados.dividas || []);

    atualizarTitulo(campoNome1, tituloPessoa1);
    calcularPerfil1();
}

function carregarPerfil2() {
    const chave = gerarChavePerfil(2);
    const dadosSalvos = localStorage.getItem(chave);

    limparPerfil2();

    if (!dadosSalvos) return;

    const dados = JSON.parse(dadosSalvos);

    if (campoNome2) campoNome2.value = dados.nome || "";
    if (salario2) salario2.value = dados.salario || "";
    if (extras2) extras2.value = dados.extras || "";
    if (plr2) plr2.value = dados.plr || "";
    if (decimo2) decimo2.value = dados.decimo || "";
    if (ferias2) ferias2.value = dados.ferias || "";
    if (investimento2) investimento2.value = dados.investimento || "";

    preencherEntradasExtras(2, dados.entradasExtras || []);
    preencherDividas(2, dados.dividas || []);

    atualizarTitulo(campoNome2, tituloPessoa2);
    calcularPerfil2();
}

function atualizarTotalFiis() {
    const quantidades = document.querySelectorAll(".fii-quantidade");
    const dividendos = document.querySelectorAll(".fii-dividendo");
    const cotas = document.querySelectorAll(".fii-cota");

    let totalRenda = 0;
    let totalInvestido = 0;

    for (let i = 0; i < quantidades.length; i++) {
        const q = parseFloat(quantidades[i].value) || 0;
        const d = parseFloat(dividendos[i].value) || 0;
        const c = parseFloat(cotas[i].value) || 0;

        totalRenda += q * d;
        totalInvestido += q * c;
    }

    if (totalDividendosFii) {
        totalDividendosFii.innerHTML = `<strong>Resumo:</strong> Renda: ${formatarMoeda(totalRenda)} | Investido: ${formatarMoeda(totalInvestido)}`;
    }
}

function atualizarTipoFii(selectElement, inputTipo) {
    const codigo = selectElement.value;
    inputTipo.value = mapaTiposFiis[codigo] || "";
}

function criarBlocoFii() {
    const container = document.createElement("div");
    container.className = "item-investimento-dinamico";

    container.innerHTML = `
        <label>Fundo Imobiliário</label>
        <select class="fii-nome">
            <option value="">Selecione um FII</option>
            <option value="KNCR11">KNCR11</option>
            <option value="KNIP11">KNIP11</option>
            <option value="MCCI11">MCCI11</option>
            <option value="RBRY11">RBRY11</option>
            <option value="RBRR11">RBRR11</option>
            <option value="CPTS11">CPTS11</option>
            <option value="MXRF11">MXRF11</option>
            <option value="VGHF11">VGHF11</option>
            <option value="KNSC11">KNSC11</option>
            <option value="VGIR11">VGIR11</option>
            <option value="HGCR11">HGCR11</option>
            <option value="BTCI11">BTCI11</option>
            <option value="VRTA11">VRTA11</option>
            <option value="PLCR11">PLCR11</option>
            <option value="CVBI11">CVBI11</option>
            <option value="VCJR11">VCJR11</option>
            <option value="HABT11">HABT11</option>
            <option value="PORD11">PORD11</option>
            <option value="HGLG11">HGLG11</option>
            <option value="BTLG11">BTLG11</option>
            <option value="BRCO11">BRCO11</option>
            <option value="VILG11">VILG11</option>
            <option value="XPLG11">XPLG11</option>
            <option value="GARE11">GARE11</option>
            <option value="TRXF11">TRXF11</option>
            <option value="GGRC11">GGRC11</option>
            <option value="ALZR11">ALZR11</option>
            <option value="LVBI11">LVBI11</option>
            <option value="RBRL11">RBRL11</option>
            <option value="XPML11">XPML11</option>
            <option value="VISC11">VISC11</option>
            <option value="HGBS11">HGBS11</option>
            <option value="HGRU11">HGRU11</option>
            <option value="MALL11">MALL11</option>
            <option value="HSML11">HSML11</option>
            <option value="BBRC11">BBRC11</option>
            <option value="PVBI11">PVBI11</option>
            <option value="HGPO11">HGPO11</option>
            <option value="KNRI11">KNRI11</option>
            <option value="JSRE11">JSRE11</option>
            <option value="BRCR11">BRCR11</option>
            <option value="RCRB11">RCRB11</option>
            <option value="VINO11">VINO11</option>
            <option value="TEPP11">TEPP11</option>
            <option value="BCFF11">BCFF11</option>
            <option value="HFOF11">HFOF11</option>
            <option value="RBRF11">RBRF11</option>
            <option value="KFOF11">KFOF11</option>
            <option value="TGAR11">TGAR11</option>
            <option value="RZTR11">RZTR11</option>
        </select>

        <div class="linha-tripla-fii">
            <div>
                <label>Quantidade</label>
                <input type="number" class="fii-quantidade" placeholder="0">
            </div>

            <div>
                <label>Dividendo por cota</label>
                <input type="number" step="0.01" class="fii-dividendo" placeholder="0.00">
            </div>

            <div>
                <label>Valor da cota</label>
                <input type="number" step="0.01" class="fii-cota" placeholder="0.00">
            </div>
        </div>

        <label>Tipo do FII</label>
        <input type="text" class="fii-tipo" placeholder="Papel, Tijolo ou Híbrido" readonly>

        <div class="linha-dupla">
            <div class="resumo-box resumo-investimento">
                <strong>Renda mensal:</strong>
                <span class="fii-renda-item">R$ 0,00</span>
            </div>

            <div class="resumo-box resumo-investimento">
                <strong>Valor investido:</strong>
                <span class="fii-total-investido">R$ 0,00</span>
            </div>
        </div>
    `;

    const selectFii = container.querySelector(".fii-nome");
    const quantidadeFii = container.querySelector(".fii-quantidade");
    const dividendoFii = container.querySelector(".fii-dividendo");
    const cotaFii = container.querySelector(".fii-cota");
    const tipoFii = container.querySelector(".fii-tipo");
    const rendaItem = container.querySelector(".fii-renda-item");
    const totalInvestidoItem = container.querySelector(".fii-total-investido");

    function atualizarResumoItem() {
        const quantidade = parseFloat(quantidadeFii.value) || 0;
        const dividendo = parseFloat(dividendoFii.value) || 0;
        const cota = parseFloat(cotaFii.value) || 0;

        const rendaMensal = quantidade * dividendo;
        const totalInvestido = quantidade * cota;

        rendaItem.textContent = formatarMoeda(rendaMensal);
        totalInvestidoItem.textContent = formatarMoeda(totalInvestido);

        atualizarTotalFiis();
    }

    selectFii.addEventListener("change", function () {
        atualizarTipoFii(selectFii, tipoFii);
        atualizarResumoItem();
    });

    quantidadeFii.addEventListener("input", atualizarResumoItem);
    dividendoFii.addEventListener("input", atualizarResumoItem);
    cotaFii.addEventListener("input", atualizarResumoItem);

    return container;
}

if (campoNome1) {
    campoNome1.addEventListener("input", function () {
        atualizarTitulo(campoNome1, tituloPessoa1);
    });
}

if (campoNome2) {
    campoNome2.addEventListener("input", function () {
        atualizarTitulo(campoNome2, tituloPessoa2);
    });
}

[
    salario1, extras1, decimo1, plr1, ferias1, investimento1
].forEach((campo) => {
    if (campo) campo.addEventListener("input", calcularPerfil1);
});

[
    salario2, extras2, decimo2, plr2, ferias2, investimento2
].forEach((campo) => {
    if (campo) campo.addEventListener("input", calcularPerfil2);
});

if (botaoEntrada1 && listaEntradas1) {
    botaoEntrada1.addEventListener("click", function () {
        const novoCampo = criarCampoEntrada(1);
        listaEntradas1.appendChild(novoCampo);
    });
}

if (botaoRemoverEntrada1 && listaEntradas1) {
    botaoRemoverEntrada1.addEventListener("click", function () {
        if (listaEntradas1.lastElementChild) {
            listaEntradas1.removeChild(listaEntradas1.lastElementChild);
            calcularPerfil1();
        }
    });
}

if (botaoEntrada2 && listaEntradas2) {
    botaoEntrada2.addEventListener("click", function () {
        const novoCampo = criarCampoEntrada(2);
        listaEntradas2.appendChild(novoCampo);
    });
}

if (botaoRemoverEntrada2 && listaEntradas2) {
    botaoRemoverEntrada2.addEventListener("click", function () {
        if (listaEntradas2.lastElementChild) {
            listaEntradas2.removeChild(listaEntradas2.lastElementChild);
            calcularPerfil2();
        }
    });
}

if (botaoDivida1 && listaDividas1) {
    botaoDivida1.addEventListener("click", function () {
        const novaDivida = criarCampoDivida(1);
        listaDividas1.appendChild(novaDivida);
    });
}

if (botaoRemoverDivida1 && listaDividas1) {
    botaoRemoverDivida1.addEventListener("click", function () {
        if (listaDividas1.lastElementChild) {
            listaDividas1.removeChild(listaDividas1.lastElementChild);
            calcularPerfil1();
        }
    });
}

if (botaoDivida2 && listaDividas2) {
    botaoDivida2.addEventListener("click", function () {
        const novaDivida = criarCampoDivida(2);
        listaDividas2.appendChild(novaDivida);
    });
}

if (botaoRemoverDivida2 && listaDividas2) {
    botaoRemoverDivida2.addEventListener("click", function () {
        if (listaDividas2.lastElementChild) {
            listaDividas2.removeChild(listaDividas2.lastElementChild);
            calcularPerfil2();
        }
    });
}

if (ano1 && mes1) {
    ano1.addEventListener("change", carregarPerfil1);
    mes1.addEventListener("change", carregarPerfil1);
}

if (ano2 && mes2) {
    ano2.addEventListener("change", carregarPerfil2);
    mes2.addEventListener("change", carregarPerfil2);
}

botoesAbas.forEach((botao) => {
    botao.addEventListener("click", function () {
        const abaDestino = botao.getAttribute("data-aba");

        botoesAbas.forEach((item) => item.classList.remove("ativa"));
        conteudosAbas.forEach((conteudo) => conteudo.classList.remove("ativa"));

        botao.classList.add("ativa");

        const conteudoSelecionado = document.getElementById(`aba-${abaDestino}`);
        if (conteudoSelecionado) {
            conteudoSelecionado.classList.add("ativa");
        }
    });
});

if (botaoTopo) {
    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

window.addEventListener("scroll", function () {
    if (botaoTopo) {
        if (window.scrollY > 150) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    }
});

if (botaoSalvar) {
    botaoSalvar.addEventListener("click", function () {
        const chavePerfil1 = gerarChavePerfil(1);
        const chavePerfil2 = gerarChavePerfil(2);

        const dadosPerfil1 = coletarDadosPerfil1();
        const dadosPerfil2 = coletarDadosPerfil2();

        localStorage.setItem(chavePerfil1, JSON.stringify(dadosPerfil1));
        localStorage.setItem(chavePerfil2, JSON.stringify(dadosPerfil2));

        alert("Dados salvos com sucesso para o Ano e Mês selecionados.");
    });
}

if (botaoAdicionarFii && listaFiis) {
    botaoAdicionarFii.addEventListener("click", function () {
        const novoFii = criarBlocoFii();
        listaFiis.appendChild(novoFii);
        atualizarTotalFiis();
    });
}

if (botaoRemoverFii && listaFiis) {
    botaoRemoverFii.addEventListener("click", function () {
        if (listaFiis.lastElementChild) {
            listaFiis.removeChild(listaFiis.lastElementChild);
            atualizarTotalFiis();
        }
    });
}

if (listaFiis && listaFiis.children.length === 0) {
    listaFiis.appendChild(criarBlocoFii());
    atualizarTotalFiis();
}

carregarPerfil1();
carregarPerfil2();

calcularPerfil1();
calcularPerfil2();