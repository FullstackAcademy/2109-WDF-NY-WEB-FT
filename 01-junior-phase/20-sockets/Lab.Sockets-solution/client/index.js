import socket from 'socket.io-client';

const clientSocket = socket(window.location.origin);

clientSocket.on('connect', () => {
 console.log('Connected to server');
})

const timeHeader = document.getElementById('time')
clientSocket.on('time-change', (time) => {
 timeHeader.innerText = time
})
