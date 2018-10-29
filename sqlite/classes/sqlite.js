var sqlite3 = require('sqlite3').verbose();

// Utiliza o banco em memória
//var db = new sqlite3.Database(':memory:');

// Arquivo do bando de dados
var db = new sqlite3.Database('database/sqlite.db');

class Sqlite {
    createDatabase() {

        db.serialize( () => {
            db.run(`
                CREATE TABLE IF NOT EXISTS users(
                    id INT,
                    email TEXT,
                    name TEXT,
                    password TEXT
                )`)
        })

        /*db.serialize(function() {
            db.run("CREATE TABLE lorem (info TEXT)");

            var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("Ipsum => " + i);
            }
            stmt.finalize();    

            db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
                console.log(row.id + ": " + row.info);
            });
        });*/

        //db.close();
    }

    createUser() {
        let stmt = db.prepare('INSERT INTO users VALUES(:id, :email, :name, :password)')
        stmt.run([1, 'email', 'name', 'pass'])
        stmt.finalize()
    }

    getUsers() {
        db.all('SELECT * FROM users', (error, data) => {
            console.log(data)
        })

        db.each("SELECT * FROM users", (error, row) => {
            console.log(row);
        })
    }
}

module.exports = Sqlite