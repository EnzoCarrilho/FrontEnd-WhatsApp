'use strict'

async function listarTodosUsuarios(){
    const url = "https://api-whatsapp-9nb5.onrender.com/v1/whatsapp/"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
    
}
listarTodosUsuarios()