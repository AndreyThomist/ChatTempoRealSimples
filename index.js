const express = require('express')
const app = express();
app.set('view engine','ejs');
app.use(express.json());
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use('/assets', express.static('assets'))

io.on('connection', (socket) => {
    socket.on('sendMessage',(data) => {
        io.emit('sendMessage',data);
    })
});

app.get('/',(req,res,next) => {
    res.render('index',{
        title:"Chat Simples"
    })
});




http.listen(3000, function(){
    
});