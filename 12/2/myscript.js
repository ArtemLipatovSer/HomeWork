let Fraction = {
    one: {
        numerator: 1,
        denominator: 10
    },
    two: {
        numerator: 1,
        denominator: 30
    },
    DrobSum: function(a, b){
        let sum = 0
        a = this.one.numerator / this.one.denominator
        b = this.two.numerator / this.two.denominator
        sum = a + b
        return sum.toFixed(4)
    },
    DrobSub: function(a, b){
        let sum = 0
        a = this.one.numerator / this.one.denominator
        b = this.two.numerator / this.two.denominator
        sum = a - b
        return sum.toFixed(4)
    }, 
    DrobMulti: function(a, b){
        let sum = 0
        a = this.one.numerator / this.one.denominator
        b = this.two.numerator / this.two.denominator
        sum = a * b
        return sum.toFixed(4)
    },
    DrobDiv: function(a, b){
        let sum = 0
        a = this.one.numerator / this.one.denominator
        b = this.two.numerator / this.two.denominator
        sum = a / b
        return sum.toFixed(4)
    }
}
alert (Fraction.DrobSum())
alert (Fraction.DrobSub())
alert (Fraction.DrobMulti())
alert (Fraction.DrobDiv())