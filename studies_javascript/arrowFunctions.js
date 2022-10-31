// arrow functions
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a,b) => {
    return a + b;
}

const arrowSumMinimal = (a,b) => a +b

const greeting = (name) => {
    return name ? `Olá ${name}!` : "Olá sem nome kk!"
}

const testeArrow = () => console.log("Testou sem args")

const user = {
    name: "Jhow",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
}

const userArrow = {
    name: "Jhow Arrow Function",
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

console.log(sum(5,5))
console.log(arrowSum(5,5))
console.log(arrowSumMinimal(5,5))
console.log(greeting('Jhonata'))
testeArrow()
user.sayUserName()
userArrow.sayUserNameArrow()

