class AuthService {
    static validate(username, password) {
        return (username == 'admin' && password == 'admin')? true: false
    }
}
module.exports = AuthService