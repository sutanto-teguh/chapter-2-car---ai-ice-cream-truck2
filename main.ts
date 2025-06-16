// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "Buku") {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (SerialData == "Lem") {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.stringPlayable("F A C5 - E G B D ", 275), music.PlaybackMode.UntilDone)
    } else if (SerialData == "Spooky") {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    } else if (SerialData == "Winter") {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
let SerialData = ""
serial.redirectToUSB()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
