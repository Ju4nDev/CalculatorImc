let btnlimpar = document.getElementById("btnlimpar");
let rpeso = document.getElementById("txtpeso");
let peso = rpeso.value;
let raltura = document.getElementById("txtaltura");
let altura = raltura.value;

function Calcular() {
  
    if (isNaN(rpeso.value) || rpeso.value == "") {
    alert("BURRO! Digite um valor válido para peso");
    rpeso.value = "";
    rpeso.focus();
  
} else if (isNaN(raltura.value) || raltura.value == "") {
    alert("TROGLODITA! Digite um valor válido para altura");
    raltura.value = "";
    raltura.focus();
  
} else if(rpeso.value < 30 || rpeso.value > 200) {
    alert("BAGRE! Informe um valor entre 30Kg e 200kg");
    rpeso.value = "";
    rpeso.focus();

} else if(raltura.value < 1.2 || raltura.value > 2.5) {
    alert("BABACA! Informe um valor entre 1.2 metro e 2.5 metros!");
    raltura.value = "";
    raltura.focus();
}

else {
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    var imc = rpeso.value / (raltura.value * raltura.value);
  }
  
  document.getElementById("resultado").value = imc.toFixed(2);
  
  let f = document.getElementById("sexof");

  if (f.checked == true) {
   
    if (imc < 19) 
      mensagem.textContent = "Abaixo do peso\n\nVai se alimentar plmds";    
     else if (imc < 23.9) 
      mensagem.textContent = "Peso ideal\n\nTa no ideal campeã!!";    
     else if (imc < 28.9) 
      mensagem.textContent = "Obesidade leve\n\nTa começando a ficar meio rechonchudinha...";    
     else if (imc < 38.9) 
      mensagem.textContent = "Obesidade moderada\n\nTa num projeto grande de Thais Carla";   
     else if (imc > 38.9) 
      mensagem.textContent = "Obesidade mórbida\n\nTHAIS CARLA ESSE PROGRAMA NÃO É PARA VOCE, BALOFA DETECTED";
    
  } else {
    
    if (imc < 20) 
      mensagem.textContent = "Abaixo do peso\n\nVai comer guerreiro";    
     else if (imc < 24.9) 
      mensagem.textContent = "Peso ideal\n\nTa no shape de campeão!";    
     else if (imc < 29.9) 
      mensagem.textContent = "Obesidade leve\n\nTa começando a virar um projeto de gulliver...";    
     else if (imc < 39.9) 
      mensagem.textContent = "Obesidade moderana\n\nCaraca Sergio Pansa, ja ta grande em";   
     else if (imc > 39.9) 
      mensagem.textContent = "Obesidade mórbida\n\nBola de canhão gigantesca blaster";
  }
}

btnlimpar.addEventListener("click", (event) => {
  rpeso.focus();
  mensagem.textContent = "";
});