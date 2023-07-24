const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.json({
        "code": 200,
        "status": "success",
        "messages": "Hello World!"
    });
});

app.listen(3000)