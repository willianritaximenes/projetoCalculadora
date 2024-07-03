const prompt = require('prompt-sync')();

function calculadora() {
  const num1 = parseFloat(prompt('Digite o primeiro número: '));
  const num2 = parseFloat(prompt('Digite o segundo número: '));

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, digite números válidos.');
    return;
  }

  const operacao = prompt('Escolha a operação (+, -, *, /, %): ');

  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Erro: divisão por zero.');
        return;
      }
      resultado = num1 / num2;
      break;
    case '%':
      resultado = (num1 * num2) / 100;
      break;
    default:
      console.log('Operação inválida.');
      return;
  }

  console.log(`O resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`);
}

calculadora();