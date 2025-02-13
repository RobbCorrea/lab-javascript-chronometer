class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = 0
  this.intervalIdms = 0
  this.miliseconds = 0
}

addSecond = () => this.currentTime += 1

startClick() {
  this.intervalId = setInterval(this.addSecond, 1000)
}

getMinutes() {
  return Math.floor(this.currentTime / 60)
}

getSeconds() {
  return this.currentTime % 60
}

getMiliSeconds() {

}

twoDigitsNumber(value) {
  return value.toString().padStart(2, "0")
}

stopClick() {
  clearInterval(this.intervalId)
}

resetClick() {
  this.currentTime = 0
}

splitClick() {
  return {
    min: this.twoDigitsNumber(this.getMinutes()),
    sec: this.twoDigitsNumber(this.getSeconds()),
  }
}
}

