'use strict'

async function listarTodosUsuarios(){
    const url = "https://api-whatsapp-9nb5.onrender.com/v1/whatsapp/"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
    
}

async function getUserProfile(number){
    const url = `https://api-whatsapp-9nb5.onrender.com/v1/whatsapp/${number}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getUserContacts(number){
    const url = `https://api-whatsapp-9nb5.onrender.com/v1/whatsapp/contatos/${number}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getUserMessages(userNumber, contactNumber){
    const url = `https://api-whatsapp-9nb5.onrender.com/v1/whatsapp/${userNumber}?contactNumber=${contactNumber}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

listarTodosUsuarios()
getUserProfile(11987876567)
getUserContacts(11987876567)
getUserMessages(11987876567, 2699999964)