const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello World 2');
});

app.listen(3000, () => console.log('server ready'));