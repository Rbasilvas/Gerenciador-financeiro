const campoNome1 = document.getElementById("nome1");
const campoNome2 = document.getElementById("nome2");

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

const botaoDivida1 = document.getElementById("botaoDivida1");
const botaoRemoverDivida1 = document.getElementById("botaoRemoverDivida1");
const botaoDivida2 = document.getElementById("botaoDivida2");

function atualizarTitulo(campo, titulo) {
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
    return valor.toLocaleString("pt-BR", {
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

    totalEntradas1.innerHTML = `<strong>Total de entradas:</strong> ${formatarMoeda(entradas)}`;
    totalDividas1.innerHTML = `<strong>Total de dívidas:</strong> ${formatarMoeda(dividas)}`;
    total1.innerHTML = `<strong>Total geral:</strong> ${formatarMoeda(totalGeral)}`;
}

function calcularPerfil2() {
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

    totalEntradas2.innerHTML = `<strong>Total de entradas:</strong> ${formatarMoeda(entradas)}`;
    totalDividas2.innerHTML = `<strong>Total de dívidas:</strong> ${formatarMoeda(dividas)}`;
    total2.innerHTML = `<strong>Total geral:</strong> ${formatarMoeda(totalGeral)}`;
}

campoNome1.addEventListener("input", function () {
    atualizarTitulo(campoNome1, tituloPessoa1);
});

campoNome2.addEventListener("input", function () {
    atualizarTitulo(campoNome2, tituloPessoa2);
});

[
    salario1, extras1, decimo1, plr1, ferias1, investimento1
].forEach((campo) => {
    campo.addEventListener("input", calcularPerfil1);
});

[
    salario2, extras2, decimo2, plr2, ferias2, investimento2
].forEach((campo) => {
    campo.addEventListener("input", calcularPerfil2);
});

botaoEntrada1.addEventListener("click", function () {
    const novoCampo = criarCampoEntrada(1);
    listaEntradas1.appendChild(novoCampo);
});

botaoRemoverEntrada1.addEventListener("click", function () {
    if (listaEntradas1.lastElementChild) {
        listaEntradas1.removeChild(listaEntradas1.lastElementChild);
        calcularPerfil1();
    }
});

botaoEntrada2.addEventListener("click", function () {
    const novoCampo = criarCampoEntrada(2);
    listaEntradas2.appendChild(novoCampo);
});

botaoDivida1.addEventListener("click", function () {
    const novaDivida = criarCampoDivida(1);
    listaDividas1.appendChild(novaDivida);
});

botaoRemoverDivida1.addEventListener("click", function () {
    if (listaDividas1.lastElementChild) {
        listaDividas1.removeChild(listaDividas1.lastElementChild);
        calcularPerfil1();
    }
});

botaoDivida2.addEventListener("click", function () {
    const novaDivida = criarCampoDivida(2);
    listaDividas2.appendChild(novaDivida);
});

calcularPerfil1();
calcularPerfil2();