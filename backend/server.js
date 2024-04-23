const express = require("express")
const cors = require('cors')
const mysql = require('mysql')


const app = express();

app.use(cors)

const db mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crude'
})

app.get('/', (req, res) =>{
    const sql = 'SELECT * FROM student';
    db.query(sql, (err, data) => {
        if(err) return app.json('Error');
        return app.json(data)
    })
})


app.listen(8080, ()=>{
    console.log('Server Listening on Port 8080')
}) 