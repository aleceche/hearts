import io from 'socket.io-client'

const URL = 'http://localhost:3000/'

const Socket = io(URL)

export default Socket
