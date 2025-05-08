function RealParaDolar(valorConverter) {
    const cotacao = 5.76;
    let valorConvertido = (valorConverter / cotacao).toFixed(2);
    return "U$ " + valorConvertido;
}

function RealParaeuro(valorConverter) {
    const cotacao = 6.52;
    let valorConvertido = (valorConverter / cotacao).toFixed(2);
    return `€ ${valorConvertido}`;
}

function main() {
    let valorConverter, valorConvertido;
    let opcaoMoeda;

    opcaoMoeda = prompt("Olá! Qual conversão você deseja realizar hoje?\n1 - Dólar\n2 - Euro");

    if (opcaoMoeda !== "1" && opcaoMoeda !== "2") {
        alert("Opção inválida!");
        return;
    }

    valorConverter = Number(prompt("Digite o valor que deseja converter (em R$):"));
    if (isNaN(valorConverter) || valorConverter <= 0) {
        alert("Valor inválido para conversão!");
        return;
    }

    if (opcaoMoeda === "1") {
        valorConvertido = RealParaDolar(valorConverter);
    } else {
        valorConvertido = RealParaeuro(valorConverter);
    }

    alert(`O valor convertido é: ${valorConvertido}`);
}

main();