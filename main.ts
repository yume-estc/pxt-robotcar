/**
 * マイクロビットロボカー
 */
//% weight=50 color=#32c032 icon="\uf1b9" block="ロボカー"
namespace robotCar {
    //% block="停止"
    export function 停止() {
        右モーター停止()
        左モーター停止()
    }
    //% block="左回り"
    export function 左回り() {
        右モーター正回転()
        左モーター正回転()
    }
    //% block="右回り"
    export function 右回り() {
        右モーター逆回転()
        左モーター逆回転()
    }
    //% block="後進"
    export function 後進() {
        右モーター逆回転()
        左モーター正回転()
    }
    //% block="前進"
    export function 前進() {
        右モーター正回転()
        左モーター逆回転()
    }

    function 右モーター正回転() {
        pins.analogWritePin(AnalogPin.P12, 384)
        pins.analogWritePin(AnalogPin.P13, 0)
    }
    function 右モーター逆回転() {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 384)
    }
    function 右モーター停止() {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
    }
    function 左モーター正回転() {
        pins.analogWritePin(AnalogPin.P15, 384)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    function 左モーター逆回転() {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 384)
    }
    function 左モーター停止() {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
}