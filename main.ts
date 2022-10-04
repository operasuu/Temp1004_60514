let 溫度 = 0
let 光度 = 0
function 全視感測 (temp: number, cad: number) {
    if (25 <= temp && temp <= 30 && cad > 170) {
        basic.showIcon(IconNames.Happy)
    } else if (15 <= temp && temp <= 40 && cad > 100) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
basic.forever(function () {
    溫度 = input.temperature()
    光度 = input.lightLevel()
    全視感測(溫度, 光度)
})
