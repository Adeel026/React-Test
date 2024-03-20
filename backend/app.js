const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const authRouter = require('./router/auth.js');


app.use(cors());

app.use(bodyParser.json()); 
app.use(authRouter); 

const port = 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
