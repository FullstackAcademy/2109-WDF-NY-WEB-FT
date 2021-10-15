import io from 'socket.io-client'

const clientSocket = io(window.location.origin);

const usersList = document.getElementById("users-list")
const newUserForm = document.getElementById("new-user-form")

let users = []

// Instead of using React, just re-rendering everything.
const renderUsers = () => {
  usersList.innerHTML = ""
  users.forEach(user => {
    let randomNum = Math.floor(Math.random() * 200)
    const userCard = document.createElement("div")
    userCard.classList.add("user-card")
    userCard.style.backgroundColor = user.favColor
    userCard.innerHTML = `
    <span>${user.title} by ${user.author}</span>
    `
    usersList.appendChild(userCard)
  })
  console.log(usersList)
}

renderUsers()

// When we submit a form
newUserForm.onsubmit = event => {
  event.preventDefault()
  const author = document.getElementById("new-user-author").value
  const title = document.getElementById("new-user-title").value
  const favColor = document.getElementById("new-user-fav-color").value
  const newUser = { author, title, favColor }

  // Update local state
  users.push(newUser)

  // Re-render with updated state
  renderUsers()

  // Whenever we fill out the form, we emit a new-user event. Sends the new data to the server over TCP
  clientSocket.emit("new-user", newUser)
  document.getElementById("new-user-author").value = " "
  document.getElementById("new-user-fav-color").value = " "
  document.getElementById("new-user-title").value = " "
}

// Syncing to the server when the socket first connects
clientSocket.on('connect', () => {
  console.log('Connected to server')

  // When the server sends all users, client replaces its user list with what the server sent
  clientSocket.on("all-users", allUsers => {
    users = allUsers
    renderUsers()
  })

  // When the server sends a new user, we update our data and re-render
  clientSocket.on("new-user", user => {
    users.push(user)
    renderUsers()
  })
})
