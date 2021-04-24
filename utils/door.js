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

module.exports = {
  openDoor,
}
