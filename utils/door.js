const { Gpio } = require('onoff')
const DOOR = new Gpio(4, 'out')

const closeDoor = () => {
  LED.writeSync(1)
  LED.unexport()
}

const openDoor = (ms) => {
  if (DOOR.readSync() === 1) {
    DOOR.writeSync(0)
    setTimeout(closeDoor, ms);
  }
}

module.exports = {
  openDoor,
}
