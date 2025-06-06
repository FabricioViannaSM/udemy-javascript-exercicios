function checarTamanhoString(string){
    if(string.length > 10){
        console.log("texto muito longo")
    }else{
        console.log("Texto dentro do limite")
    }
}

checarTamanhoString("")
checarTamanhoString("12345678901234567890")