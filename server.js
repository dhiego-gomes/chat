const express = require('express')
const path = require('path')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const porta = process.env.PORT || 8000

const host = process.env.HEROKU_APP_NAME ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com` : "http://localhost"

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.render('index.html')
})

let messages = []

io.on('connection', socket => {
    console.log(`Socket conectado. ${socket.id}`)
    
    socket.emit('previousMessages', messages)

    socket.on('sendMessage', data => {
        messages.push(data)
       
        socket.broadcast.emit('receivedMessage', data)
    })
})

server.listen(porta, function(){
    const portaStr = porta === 80 ? '' :  ':' + porta

    if (process.env.HEROKU_APP_NAME) {
        console.log('Servidor iniciado. PORTA: ', host)
    } else {
        console.log('Servidor iniciado. PORTA: ', host, portaStr)
    }
})