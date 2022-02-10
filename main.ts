input.onPinPressed(TouchPin.P1, function () {
    pressed = true
    numPressed += 1
})
let numPressed = 0
let pressed = false
let count = 0
basic.forever(function () {
    if (numPressed == 2) {
        control.reset()
    }
    if (pressed == true) {
        count = count + 1
        basic.showNumber(count)
    }
})
