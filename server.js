const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req,res) => {
  res.send('Hello World');
});

app.listen(5000, () => console.log("Listening on port 5000"));
