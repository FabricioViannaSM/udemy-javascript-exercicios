function negativo(n){
    if(n > 0){
        return "Envie um número negativo"
    }

    return Math.abs(n)
}

console.log(negativo(10))
console.log(negativo(-15))