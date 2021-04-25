const { Gpio } = require('onoff')
const DOOR = new Gpio(4, 'out')

function closeDoor() {
  DOOR.writeSync(1)
  DOOR.unexport()
}

function openDoor(ms) {
  if (DOOR.readSync() === 1) {
    DOOR.writeSync(0)
    setTimeout(closeDoor, ms);
  }
}

module.exports = {
  openDoor,
}
