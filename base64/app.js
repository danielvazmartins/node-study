'use strict'
const btoa = require('btoa')
const atob = require('atob')

const asciiText = '1234567890'

const base64Text = btoa(asciiText)
console.log('Base64 => ', base64Text)
console.log('Ascii => ', atob(base64Text))