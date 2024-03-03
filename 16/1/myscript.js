class Marker {
    constructor (color, quantity){
        this.color = color
        this.quantity = quantity
    }
    showPrint(text){
        for (let i=0; i < text.length; i++){
            if (text[i] == ' '){
                this.quantity += 0.5
            }
            if (this.quantity == 0) {
                document.write("<br><br>Маркет закончился<br><br>")
                break
            }
            console.log(this.quantity)
            document.write(`<span style="color:${this.color}">${text[i]}</span>`)
            this.quantity -= 0.5
        }
    }
}
class Refueling extends Marker {
    constructor (color, quantity){
        super(color, quantity)
    }
    refuel(ink){
        this.quantity += ink
    }
}

const paint = new Marker("red", 2)
const refueling = new Refueling ("red", 2)
let a = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor excepturi veniam commodi libero voluptates pariatur explicabo officia maiores blanditiis ducimus aspernatur id maxime ea natus perferendis, eaque reprehenderit numquam."
paint.showPrint(a)
refueling.refuel(50)
refueling.showPrint(a)
