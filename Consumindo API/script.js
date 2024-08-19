let cotacaoUSD = 0;
let cotacaoEUR = 0;

document.addEventListener("DOMContentLoaded", function () {
    atualizarCotacoes();
});

function atualizarCotacoes() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
        .then(response => response.json())
        .then(data => {
            cotacaoUSD = parseFloat(data.USDBRL.bid);
            cotacaoEUR = parseFloat(data.EURBRL.bid);
        })
        .catch(error => {
            console.error('Erro ao buscar as cotações:', error);
        });
}

function converterUSDParaBRL() {
    const valorUSD = parseFloat(document.getElementById('valor-usd').value);
    if (!isNaN(valorUSD)) {
        const valorBRL = valorUSD * cotacaoUSD;
        document.getElementById('resultado-usd').textContent = `Valor em Real (BRL): R$ ${valorBRL.toFixed(2)}`;
    } else {
        document.getElementById('resultado-usd').textContent = 'Valor em Real (BRL): -';
    }
}

function converterEURParaBRL() {
    const valorEUR = parseFloat(document.getElementById('valor-eur').value);
    if (!isNaN(valorEUR)) {
        const valorBRL = valorEUR * cotacaoEUR;
        document.getElementById('resultado-eur').textContent = `Valor em Real (BRL): R$ ${valorBRL.toFixed(2)}`;
    } else {
        document.getElementById('resultado-eur').textContent = 'Valor em Real (BRL): -';
    }
}