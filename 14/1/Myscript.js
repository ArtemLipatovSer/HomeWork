class Circle {
    #radius
    constructor (radius){
        this.#radius = radius
    }
    get radius(){
        return this.#radius
    }
    set radius(a){
        return this.#radius = a
    }
    get diametr (){
        return this.radius*2
    }
    showSquare(){
        return 3,14 * (this.radius**2)
    }
    showLength(){
        return 2 * 3,14 * this.radius
    }   
}

const a = new Circle (5)
a.radius = 15
console.log(a.diametr)
console.log(a.showSquare())
console.log(a.showLength())