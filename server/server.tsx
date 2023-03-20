const io = require('socket.io')(3002, {
    cors: {
        origin: 'https://localhost:3001',
        methods: ['GET', 'POST']
    }
})

io.on("connection", socket => {
    socket.on('send-changes', delta => {
        console.log(delta)
    })
})