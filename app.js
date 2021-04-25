const http = require('http')
const { openDoor, closeDoor } = require('./utils/door')

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
