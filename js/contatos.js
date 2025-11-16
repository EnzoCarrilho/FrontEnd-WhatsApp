'use strict'

export async function listarTodosUsuarios(){
    const url = "http://localhost:8080/v1/whatsapp"
    const response = await fetch(url)
    const data = await response.json()
    return data
    
}

async function getUserProfile(number){
    const url = `http://localhost:8080/v1/whatsapp/user/${number}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getUserContacts(number){
    const url = `http://localhost:8080/v1/whatsapp/contatos/${number}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getUserMessages(number){
    const url = `http://localhost:8080/v1/whatsapp/mensagens/${number}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getMessagesByContactNumber(number, contactNumber){
    const url = `http://localhost:8080/v1/whatsapp/mensagens/${number}?contactNumber=${contactNumber}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getMessagesByKeyWord(number, contactNumber, keyWord){
    const url = `http://localhost:8080/v1/whatsapp/mensagem/${number}?contactNumber=${contactNumber}&keyWord=${keyWord}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

//listarTodosUsuarios()
//getUserProfile(11987876567)
//getUserContacts(11987876567)
//getUserMessages(11987876567)
//getMessagesByContactNumber(11987876567, 26999999964)
//getMessagesByContactNumber(11987876567, 26999999964, 'project')