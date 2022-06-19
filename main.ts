radio.onReceivedNumber(function (receivedNumber) {
    power = receivedNumber
    controlLeds()
    motors.motorPower(power)
})
function controlLeds () {
    if (power > 0 && power <= 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (power > 10 && power <= 25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    } else if (power > 25 && power <= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    } else if (power > 50 && power <= 75) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    } else if (power > 75 && power <= 100) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else if (power < 0 && power >= -10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (power < -10 && power >= -25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . # #
            `)
    } else if (power < -25 && power >= -50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # # .
            . . # # #
            `)
    } else if (power < -50 && power >= -75) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . # # # .
            . # # # #
            `)
    } else if (power < -75 && power >= -100) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
let power = 0
radio.setGroup(138)
basic.forever(function () {
	
})
