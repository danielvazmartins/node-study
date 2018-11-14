const request = require('request')

const API_URL = 'https://camunda.monitor.paas.santanderbr.corp'

login('xb208227', 'Prosperidade13!', (error, response) => {
    if ( !error ) {
        getData(response)
    }
})

function login(username, password, callback) {
    request.post({
        url: API_URL + '/camunda/api/admin/auth/user/default/login/welcome',
        form: {
            username: username,
            password: password
        },
        strictSSL: false
    }, (req, res) => {
        let JSESSIONID = getCookieValue('JSESSIONID', res.headers['set-cookie'])
        callback(null, JSESSIONID)
    },error => {
        callback(error)
    })
}

function getData(jSessionId) {
    let cookies = `JSESSIONID=${jSessionId};`
    request.get({
        url: API_URL + '/camunda/api/engine/engine/default/process-definition/statistics?incidents=true​',
        strictSSL: false,
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies
        }
    }, (req, res) => {
        console.log(res)
    })
}

function getCookieValue(cookieName, cookies) {
    let value = String(cookies).substr(String(cookies).indexOf(cookieName))
    return value.split('=')[1].split(';')[0]
}