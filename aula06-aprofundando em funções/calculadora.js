function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Interira (%)\n 6 - Potenciação (**)'));

    let n1 = Number(prompt('Insira o primeiror valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert('${n1} + ${n2} = ${resultado}')

    }
    
    if (operacao = 1){
        soma();
    } else if (operacao == 2){
        subtração();
    } else if (operacao == 3){
        multiplicação();
    } else if (operacao == 4){
        divisão();
    } else if (operacao == 5){
        divisãoInteira();
    } else if (operacao == 6){
        potenciação();
    }

}

calculadora();