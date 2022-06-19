radio.onReceivedNumber(function (receivedNumber) {
    power = receivedNumber
})
let power = 0
radio.setGroup(138)
basic.forever(function () {
    motors.motorPower(power)
})
