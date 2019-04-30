'use strict'
const crypto = require('crypto')

const ALGORITHM = 'AES-256-CBC'
let KEY = Buffer.alloc(32)
KEY = Buffer.concat([crypto.randomBytes(32)], KEY.length);
let IV = Buffer.alloc(16)
IV = Buffer.concat([crypto.randomBytes(16)], IV.length)

const password = '123456'
const cypher = encryptText(password)
console.log(cypher)
console.log(decryptText(cypher))


function encryptText(clearText) {
    const encryptor = crypto.createCipheriv(ALGORITHM, KEY, IV)
    encryptor.setEncoding('hex')
    encryptor.write(password)
    encryptor.end()
    return encryptor.read()
}

function decryptText(cypherText) {
    const decryptor = crypto.createDecipheriv(ALGORITHM, KEY, IV);
    decryptor.update(cypher, 'hex', 'utf-8')
    return decryptor.final('utf-8')
}