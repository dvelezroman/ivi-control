const { Gpio } = require('onoff')
const DOOR = new Gpio(4, 'out')
const BUZZER = new Gpio(17, 'out')

function buzz() {
  BUZZER.writeSync(1)
  setTimeout(BUZZER.writeSync(0), 1000)
}

function closeDoor() {
  DOOR.writeSync(1)
  BUZZER.writeSync(0)
}

function openDoor(ms) {
  if (DOOR.readSync() === 1) {
    DOOR.writeSync(0)
    BUZZER.writeSync(1)
    setTimeout(closeDoor, ms);
  }
}

module.exports = {
  openDoor,
  closeDoor,
  buzz,
}
