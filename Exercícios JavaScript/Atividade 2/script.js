document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    let imc = weight / (height * height);

    let situation;
    if (imc < 18.5) {
      situation = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      situation = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      situation = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      situation = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
      situation = 'Obesidade Grau II';
    } else {
      situation = 'Obesidade Grau III';
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Situação: <span class="${getSituationClass(imc)}">${situation}</span>`;
  });

  function getSituationClass(imc) {
    if (imc < 18.5 || imc >= 25) {
      return 'alert';
    } else if (imc >= 18.5 && imc < 25) {
      return 'normal';
    } else {
      return 'danger';
    }
  }
