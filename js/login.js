'use strict'

import {listarTodosUsuarios} from "./contatos.js"

const users = await listarTodosUsuarios()
console.log(users)

function criarCardsLogin(user){
    const container = document.getElementById('container-cards')
    
    const card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundColor = user.background
    const imgContato = document.createElement('img')
    const nomeContato = document.createElement('h2')
    
    imgContato.src = user["profile-image"]
    nomeContato.textContent = user.account

    container.appendChild(card)
    card.append(imgContato, nomeContato)

    card.addEventListener("click", () => {
    window.location.href = "conversas.html";
    });
}

for(let i=0; i<users.users.length; i++){
    criarCardsLogin(users.users[i])
}



