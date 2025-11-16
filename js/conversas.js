'use strict'

const params = new URLSearchParams(window.location.search);
const numero = params.get("number");

import {getUserContacts} from "./contatos.js"

const contatos = await getUserContacts(numero)

console.log(contatos)