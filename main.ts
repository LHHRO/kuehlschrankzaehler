let Zähler = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Zähler))
})
input.onButtonPressed(Button.B, function () {
    Zähler = 0
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        Zähler += 1
        while (input.lightLevel() > 100) {
            basic.showIcon(IconNames.Sad)
        }
    }
    basic.showIcon(IconNames.Happy)
})
