module.exports = [
    {
        pattern: 'https://jsonplaceholder.typicode.com(.*)',
        fixtures: function(match, params, headers, context) {
            //console.log(match)
            if ( match[1] == '/todos/2' ) {
                return {
                    "userId": 2,
                    "id": 2,
                    "title": "Mock from Nock",
                    "completed": true
                }
            }
        },
        get: function (match, data) {
            return {
                status: 200,
                body: data
            }
        }
    }
]