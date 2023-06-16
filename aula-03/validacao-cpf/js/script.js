$(document).ready(function () {
    $('#cpf').inputmask('999.999.999-99');
  });
  
  function validarCPF() {
    const cpfFormatado = document.getElementById('cpf').value;
    const cpf = limpaFormatacao(cpfFormatado);
  
    if (cpf === '') {
        mostraResultado('Ops, parece que você não digitou o CPF. Tente novamente', 'red');
        return;
      }
    
    if (cpf.length !== 11) {
        mostraResultado('CPF deve conter 11 dígitos.', 'red');
        return;
      }
  
    if (verificaDigitosRepetidos(cpf)) {
      mostraResultado('CPF não pode conter repetição do mesmo dígito.', 'red');
      return;
    }
  
    const digito1 = calcularDigitoVerificador(cpf, 1);
    const digito2 = calcularDigitoVerificador(cpf, 2);
  
    if (!digito1 || !digito2) {
      mostraResultado(`Ops! O CPF: ${cpfFormatado} é inválido, tente novamente`,'red');
      return;
    }
  
    mostraResultado('CPF válido.', 'green');
  }
  
  function calcularDigitoVerificador(cpf, posicao) {
    const sequencia = cpf.slice(0, 9 + posicao).split('');
    let soma = 0;
    let multiplicador = 10 + posicao;
  
    for (const numero of sequencia) {
      soma += multiplicador * Number(numero);
      multiplicador--;
    }
  
    const restoDivisao = (soma * 10) % 11;
    const digito = cpf.slice(9 + posicao, 10 + posicao);
  
    return restoDivisao === Number(digito);
  }
  
  function limpaFormatacao(cpf) {
    return cpf.replace(/\D/g, ''); // Remove qualquer caractere não numérico
  }
  
  function mostraResultado(texto, cor) {
    const span = document.getElementById('resultado');
    span.innerHTML = texto;
    span.style.color = cor;
  }
  
  function verificaDigitosRepetidos(cpf) {
    return cpf.split('').every((d) => d === cpf[0]);
  }
  