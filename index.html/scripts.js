
let chave = "2099f8960d84b49524323347c81c997c"
   
function colocarnatela(dados){
console.log(dados)

document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".Humidade").innerHTML = "Humidade " + dados.main.humidity + "%"
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
async function buscarcidade(cidade){
let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +"&lang=pt_br" + "&units=metric")
.then(resposta => resposta.json())

colocarnatela (dados)
}


function clique(){
    let cidade = document.querySelector(".input-cidade").value
    
    buscarcidade(cidade)
}
