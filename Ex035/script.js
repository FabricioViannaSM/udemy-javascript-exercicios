calculadora = {
    somar : function(num1, num2){
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    },
    subtrair : function(num1, num2){
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    },
    multiplicar : function(num1, num2){
        console.log(`${num1} x ${num2} = ${num1 * num2}`)
    },
    dividir : function(num1, num2){
        console.log(`${num1} : ${num2} = ${num1 / num2}`)
    }            
}

calculadora.somar(10, 5)
calculadora.subtrair(10, 5)
calculadora.multiplicar(10, 5)
calculadora.dividir(10, 5)