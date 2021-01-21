const express = require('express');
// const useSocket = require('socket.io')



const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);

const  rooms  = new Map();


app.get ('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms'),(res,req) => {
    if (!rooms.has())
    res.send()
}

io.on('connection',(socket) => {
    console.log('пользователь подключился',socket.id)
})

server.listen(3001, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log("cервер запущен")
}); 