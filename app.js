const http = require('http')
const rfid = require('node-rfid')

const { openDoor, closeDoor, buzz } = require('./utils/door')

rfid.read((err, result) => {
  if (err) {
    buzz()
  } else {
    console.log(result)
  }
})

closeDoor()

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
