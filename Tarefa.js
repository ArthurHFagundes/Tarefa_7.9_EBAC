const form = document.getElementById("form")
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campo-a').value); // CRIA UMA CONSTRANTE NUMERAL ONDE PEGA O VALOR DO ELEMENTO COM A ID "campo-a"
    const campoB = parseFloat(document.getElementById('campo-b').value);

    if (campoB > campoA) {
        mensagemDiv.textContent = "Formulário válido: Campo B é maior que Campo A."; // CRIA UMA MENSAGEM NA div
        mensagemDiv.className = "message success"; // CRIA UMA CLASSE (PARA USAR COM CSS)
    } else {
        mensagemDiv.textContent = "Formulário inválido: Campo B deve ser maior que Campo A.";
        mensagemDiv.className = "message error"; 
    }
});