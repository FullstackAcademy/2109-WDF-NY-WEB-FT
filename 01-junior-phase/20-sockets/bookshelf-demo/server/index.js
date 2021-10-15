const express = require ('express')
const app = express()
const path = require('path')
const socket = require('socket.io')

// Setting up static and body parsing middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.urlencoded({extended: true}))

// No sequelize here; all data for this app is in an array
let users = [
  {author: 'Zadie Smith', title: 'White Teeth', favColor: 'orange'},
]

const PORT = 3000
// app.listen returns a server object that represents the currenly running express server.
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

// By passing this into socket.io, it knows that this server should be willing to accept web socket requests. Returns an io object.
const serverSocket = socket(server)

// ALL EVENT DRIVEN FROM HERE

// On a connection event (when a new client requests to connect to the server), this is what happens:
serverSocket.on('connection', (socket) => {
  console.log(`Connection from client ${socket.id}`);
  // Emit all of the users in our array to our user
  socket.emit("all-users", users)
  // If user submits a new user event (enter a new user), add it to array then broadcast it.
  socket.on("new-user", user => {
    console.log("received a user")
    users.push(user)
    // Broadcasts the new user to every other socket connection that's currently active.
    socket.broadcast.emit("new-user", user)
  })
  // setInterval(() => {
  //   const time = (new Date()).toLocaleString()
  //   socket.emit('time-change', time)
  // }, 1000);
})
