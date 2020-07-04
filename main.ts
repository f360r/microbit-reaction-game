input.onPinPressed(TouchPin.P0, function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
