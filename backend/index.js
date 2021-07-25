const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3333;


app.get('*', cors());
app.post('*', cors());
app.options('*', cors());
app.put('*', cors());
app.delete('*', cors());


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);



app.listen(port, () => {
    console.log('Application listening on port ' + port + '!');
});

