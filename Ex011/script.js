let idade = 18;
let cnh = false;

if(idade < 18 && cnh == false){
    console.log("Não tem idade minima para dirigir")
}else if(idade >= 18 && cnh == false){
    console.log("Você tem idade para tirar CNH")
}else if(cnh == true && idade >= 18){
    console.log("Você é habilitado")
}else {
    console.log("Como você conseguiu uma cnh sendo menor de idade??????")
}