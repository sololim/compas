input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
    if (input.compassHeading() == ArrowNames.North) {
        basic.showString("N")
    }
    if (input.compassHeading() == ArrowNames.East) {
        basic.showString("e")
    }
    if (input.compassHeading() == ArrowNames.SouthEast) {
        basic.showString("se")
    }
    if (input.compassHeading() == ArrowNames.West) {
        basic.showString("w")
    }
    if (input.compassHeading() == ArrowNames.NorthWest) {
        basic.showString("nw")
    }
})
