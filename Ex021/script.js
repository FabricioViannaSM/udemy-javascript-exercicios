function dirigir(idade){
    if(typeof idade == "number"){
        console.log("O tipo primitivo é um número")
    }else if(typeof idade == "string"){
        console.log("O tipo primitivo é um string")
    }else if(typeof idade == "boolean"){
        console.log("O tipo primitivo é um booleano")
    }
}

dirigir(NaN)
dirigir("")
dirigir(true)