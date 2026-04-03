const campoNome1 = document.getElementById("nome1");
const campoNome2 = document.getElementById("nome2");

const tituloPessoa1 = document.getElementById("titulo-pessoa1");
const tituloPessoa2 = document.getElementById("titulo-pessoa2");

function atualizarTitulo(campo, titulo) {
    const nome = campo.value.trim();

    if (nome === "") {
        titulo.textContent = "Novo Perfil";
    } else {
        titulo.textContent = `Finanças de ${nome}`;
    }
}

campoNome1.addEventListener("input", function () {
    atualizarTitulo(campoNome1, tituloPessoa1);
});

campoNome2.addEventListener("input", function () {
    atualizarTitulo(campoNome2, tituloPessoa2);
});