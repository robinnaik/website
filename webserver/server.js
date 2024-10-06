const express = require('express')
const app = express()
const port = process.env.PORT ? process.env.PORT : 80
const path = require('path');
const log = require('./utility/log');

app.use(express.json())

// Use to access public files like html/css etc
app.use('/', express.static(path.join(__dirname, '../build/')));

app.get("/", (req, res) => { res.send("Successfully logged in. Hurray !!!") })

app.listen(port, () => {
    log.info("main", "Serving React UI on port " + port)
})
