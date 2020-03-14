const express = require('express')
const app = express();
app.set('view engine','ejs');
app.use(express.json());
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use('/assets', express.static('assets'))

io.on('connection', function(socket){
    console.log(socket);
});

app.get('/',(req,res,next) => {
    res.render('index',{
        title:"Chat Simples"
    })
});




app.listen(3000)