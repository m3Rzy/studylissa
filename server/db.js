const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres", // указываем имя пользователя
    password: '123321', // пароль пользователя
    host: "localhost", // ip пока указать локальный, так как БД в любом случае будет на сервере локально.
    port: 5432, // порт всегда 5432
    database: "studylissa", // название БД, не забываем на сервере создавать БД и таблицы к ней заранее
})

module.exports = pool