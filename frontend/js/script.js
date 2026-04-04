const campoNome1 = document.getElementById("nome1");
const campoNome2 = document.getElementById("nome2");
const entradaExtraBox1 = document.getElementById("entradaExtraBox1");
const entradaExtraBox2 = document.getElementById("entradaExtraBox2");
const botaoEntrada1 = document.getElementById("botaoEntrada1");
const botaoEntrada2 = document.getElementById("botaoEntrada2");

const tituloPessoa1 = document.getElementById("titulo-pessoa1");
const tituloPessoa2 = document.getElementById("titulo-pessoa2");

const salario1 = document.getElementById("salario1");
const extras1 = document.getElementById("extras1");
const decimo1 = document.getElementById("decimo1");
const plr1 = document.getElementById("plr1");
const ferias1 = document.getElementById("ferias1");
const entradaExtraValor1 = document.getElementById("entradaExtraValor1");
const investimento1 = document.getElementById("investimento1");
const dividaValor1 = document.getElementById("dividaValor1");
const totalEntradas1 = document.getElementById("totalEntradas1");
const totalDividas1 = document.getElementById("totalDividas1");
const total1 = document.getElementById("total1");

const salario2 = document.getElementById("salario2");
const extras2 = document.getElementById("extras2");
const decimo2 = document.getElementById("decimo2");
const plr2 = document.getElementById("plr2");
const ferias2 = document.getElementById("ferias2");
const entradaExtraValor2 = document.getElementById("entradaExtraValor2");
const investimento2 = document.getElementById("investimento2");
const dividaValor2 = document.getElementById("dividaValor2");
const totalEntradas2 = document.getElementById("totalEntradas2");
const totalDividas2 = document.getElementById("totalDividas2");
const total2 = document.getElementById("total2");

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

function calcularPerfil1() {
    const entradas =
        converterNumero(salario1.value) +
        converterNumero(extras1.value) +
        converterNumero(decimo1.value) +
        converterNumero(plr1.value) +
        converterNumero(ferias1.value) +
        converterNumero(entradaExtraValor1.value);

    const dividas = converterNumero(dividaValor1.value);
    const investimento = converterNumero(investimento1.value);
    const totalGeral = entradas - dividas - investimento;

    totalEntradas1.innerHTML = `<strong>Total de entradas:</strong> ${formatarMoeda(entradas)}`;
    totalDividas1.innerHTML = `<strong>Total de dívidas:</strong> ${formatarMoeda(dividas)}`;
    total1.innerHTML = `<strong>Total geral:</strong> ${formatarMoeda(totalGeral)}`;
}

function calcularPerfil2() {
    const entradas =
        converterNumero(salario2.value) +
        converterNumero(extras2.value) +
        converterNumero(decimo2.value) +
        converterNumero(plr2.value) +
        converterNumero(ferias2.value) +
        converterNumero(entradaExtraValor2.value);

    const dividas = converterNumero(dividaValor2.value);
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
    salario1, extras1, decimo1, plr1, ferias1, entradaExtraValor1, investimento1, dividaValor1
].forEach((campo) => {
    campo.addEventListener("input", calcularPerfil1);
});

[
    salario2, extras2, decimo2, plr2, ferias2, entradaExtraValor2, investimento2, dividaValor2
].forEach((campo) => {
    campo.addEventListener("input", calcularPerfil2);
});
botaoEntrada1.addEventListener("click", function () {
    entradaExtraBox1.classList.toggle("escondido");
});

botaoEntrada2.addEventListener("click", function () {
    entradaExtraBox2.classList.toggle("escondido");
});
calcularPerfil1();
calcularPerfil2();