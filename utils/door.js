import { Gpio } from 'onoff'
const DOOR = new Gpio(4, 'out')

const closeDoor = () => {
  LED.writeSync(1)
  LED.unexport()
}

export const openDoor = () => {
  if (DOOR.readSync() === 1) {
    DOOR.writeSync(0)
    setTimeout(closeDoor, 5000);
  }
}