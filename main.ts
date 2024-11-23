//% color="#FFA500" weight=110
namespace microPixel {
    /**
     * Maakt de Sprite aan
     * 
     * 
     *  
     */
    //% block
    export function maakSprite(tekst: string): void {
        var lengte 
        var positie = 0
        var index = 0
        var positiepixel
        
        if (20 < tekst.length) {
            lengte = 255
            positie = 0
        } else {
            lengte = 15
            positie = parseFloat(tekst.substr(16, 2))
        }
        while (index <= lengte) {
            if (Math.trunc(index / 16) % 2 == 0) {
                positiepixel = 16 - (index - Math.trunc(index / 16) * 16) + (16 + Math.trunc(index / 16) * 16 - 16) - 1
            } else {
                positiepixel = 16 * positie + index
            }
            if (tekst.substr(index, 1) == ".") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Black))
            } else if (tekst.substr(index, 1) == "1") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.White))
            } else if (tekst.substr(index, 1) == "2") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Red))
            } else if (tekst.substr(index, 1) == "3") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Purple))
            } else if (tekst.substr(index, 1) == "4") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Orange))
            } else if (tekst.substr(index, 1) == "5") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Yellow))
            } else if (tekst.substr(index, 1) == "6") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Violet))
            } else if (tekst.substr(index, 1) == "7") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Green))
            } else if (tekst.substr(index, 1) == "8") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Blue))
            } else if (tekst.substr(index, 1) == "9") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Indigo))
            } else if (tekst.substr(index, 1) == "0") {
                strip.setPixelColor(positiepixel, neopixel.colors(NeoPixelColors.Black))
            } else {
                strip.setPixelColor(16 * positiepixel + index, neopixel.colors(NeoPixelColors.Black))
            }
            index += 1
        }
        if (256 == tekst.length) {
            strip.show()
        } else if (15 == parseFloat(tekst.substr(16, 2))) {
            strip.show()
        }
    }

}
