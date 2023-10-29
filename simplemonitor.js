const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();

if (process.argv[2] == undefined) {
    console.log("you must indicate server port ");
    process.exit(0)
}

app.get('/', function (req, res) {
res.send('Simple Monitoring Web server is UP');
});

app.post('/data', urlencodedParser, (request, response) => {
    fs.appendFile(request.body.file, request.body.data+'\n', (err)=> {
        if(err) {
            console.log(err);
        } else {}
    });s
    response.end();
});

app.listen(process.argv[2], function () {
console.log(`Simple Monitoring Web server running on port ${process.argv[2]}`);
});