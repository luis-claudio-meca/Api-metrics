const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.get('/', (req , res) =>{

    res.send('Hello Api');
})


require('./controllers/addculto')(app)

app.listen(3003);
