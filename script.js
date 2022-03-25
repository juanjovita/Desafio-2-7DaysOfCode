




function registrar() {
var name = document.getElementById('nome').value
var idade = document.getElementById('idade').value
var linguagem = document.getElementById('linguagem').value
var paragrafo1 = document.getElementById('resposta1')


  resposta1 = 
  ` <p>Olá ${name}! Você já tem ${idade} e está aprendendo ${linguagem}</p> <br>
  <h3>Está gostando de estudar? Digite "1" para SIM e "2" para NÃO</h3> <br>`

  paragrafo1.innerHTML = resposta1 + '<input type="number" id="opcao" min="1" max="2"> <button onclick="escolher()" id="button" type="button">REGISTRAR!</button>'
}

function escolher(){
  var paragrafo2 = document.getElementById('resposta2')
  var querestudar = document.getElementById('opcao').value

  if(querestudar == 1){
    resposta2 = 'Muito bom! Continue estudando e você terá muito sucesso!'
  }
  else{
    resposta2 = 'Aahhh que pena... Já tentou aprender outras linguagens?'
  }

  paragrafo2.innerHTML = resposta2
}

console.log(registrar)