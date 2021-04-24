const http = require('http')

const { Gpio } = require('onoff')
const DOOR = new Gpio(4, 'out')

function closeDoor() {
  LED.writeSync(1)
  LED.unexport()
}

function openDoor(ms) {
  if (DOOR.readSync() === 1) {
    DOOR.writeSync(0)
    setTimeout(closeDoor, ms);
  }
}

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  const url = req.url
  if (url === '/pin') {
    res.write(JSON.stringify({
      status: true,
      msg: "PUN"
    }))
    res.end()
  } else if (url === '/open') {
    openDoor(5000)
    res.write(JSON.stringify({
      status: true,
      msg: "Open"
    }))
    res.end()
  } else {
    res.write(JSON.stringify({
      status: true,
      msg: "Ahoy sailor..."
    }))
    res.end()
  }
}).listen(3000, () => {
  console.log("Server started at port 3000")
})
