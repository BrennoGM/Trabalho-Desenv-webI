function calcular() {
  let peso = parseFloat(document.getElementById('val1').value);
  let altura = parseFloat(document.getElementById('val2').value);
  let result = document.getElementById('result');

  if (peso < 0 || peso > 400 || altura < 0 || altura > 3) {
    var x = document.getElementById('erro');
    x.textContent = 'ERRO: valor invalido';
  } else {
    var x = document.getElementById('erro');
    x.textContent = '';

    result.value = peso / (altura * altura);

    if (result.value < 20) {
      result.value = 'Abaixo do Peso';
    }
    if (result.value > 20 && result.value <= 25) {
      result.value = 'Peso Normal';
    }
    if (result.value > 25 && result.value <= 30) {
      result.value = 'Sobrepeso';
    }
    if (result.value > 30 && result.value <= 35) {
      result.value = 'Obesidade Grau I';
    }
    if (result.value > 35 && result.value <= 40) {
      result.value = 'Obesidade Grau II';
    }
    if (result.value > 40) {
      result.value = 'Obesidade Grau III';
    }
  }
}

function calculadora() {
  let valor1 = parseFloat(document.getElementById('valor1').value);
  let valor2 = parseFloat(document.getElementById('valor2').value);
  let sinal = document.getElementById('sinal').value;
  let resultadocal = document.getElementById('resultadocal');

  if (sinal == '+') {
    resultadocal.value = valor1 + valor2;
  }

  if (sinal == '-') {
    resultadocal.value = valor1 - valor2;
  }

  if (sinal == '*') {
    resultadocal.value = valor1 * valor2;
  }

  if (sinal == '/') {
    resultadocal.value = valor1 / valor2;
  }
}

function calculardesc() {
  let nome = document.getElementById('nomeprodut').value;
  let preco = parseFloat(document.getElementById('precoprodut').value);
  let quantidade = parseInt(document.getElementById('quantprodut').value);
  let nomeimpresso = document.getElementById('resultprodut');
  let totalprodut = document.getElementById('resultadpordut');

  if (preco < 0 || quantidade <= 0 || nome == '') {
    var x = document.getElementById('erro1');
    x.textContent = 'ERRO: valor invalido';
  } else {
    var x = document.getElementById('erro1');
    x.textContent = '';

    preco = preco * quantidade;

    console.log(totalprodut);
    nomeimpresso.value = nome;

    if (quantidade <= 10) {
      totalprodut.value = preco;
    }
    if (quantidade > 10 && quantidade < 20) {
      totalprodut.value = preco - (preco * 10) / 100;
    }
    if (quantidade > 20 && quantidade < 50) {
      totalprodut.value = preco - (preco * 20) / 100;
    }
    if (quantidade > 50) {
      totalprodut.value = preco - (preco * 25) / 100;
    }
  }
}

function verificacpf() {
  let primeiros1 = document.getElementById('primeiros').value;
  let segundos = document.getElementById('ultimos').value;
  let resultcpf = document.getElementById('cpfresult');

  let junta = primeiros1 + segundos;

  if (junta < 0) {
    var x = document.getElementById('erro2');
    x.textContent = 'ERRO: valor invalido';
  } else {
    var x = document.getElementById('erro2');
    x.textContent = '';

    var Soma;
    var Resto;
    Soma = 0;
    if (junta == '00000000000') return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(junta.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(junta.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(junta.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0;
    }
    if (Resto != parseInt(junta.substring(10, 11))) {
      resultcpf.value = 'CPF INVALIDO';
    } else {
      resultcpf.value = 'CPF VALIDO';
    }
  }
}
