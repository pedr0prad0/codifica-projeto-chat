var mensagenssalvas = localStorage.getItem('mensagens')


function addMensagem1() {
    var mensagens = []
    mensagens.push(document.getElementById("mensagemUsuario1").value)


    var li = document.createElement("li")
    li.classList.add("mensagemUsuario1")
    li.innerText = mensagens

    document.getElementById("listaDeMensagens").append(li)

    var mensagensJSON = JSON.stringify(mensagens);
    localStorage.setItem("objeto", mensagensJSON);
}


function addMensagem2() {
    var mensagens = []
    mensagens.push(document.getElementById("mensagemUsuario2").value)

    var li = document.createElement("li")
    li.classList.add("mensagemUsuario2")
    li.innerText = mensagens

    document.getElementById("listaDeMensagens").append(li)

    var mensagensJSON = JSON.stringify(mensagens);
    localStorage.setItem("objeto", mensagensJSON);
}






