let num = 49


for(i=2; num != i; i++){
    if(num%i == 0){
        console.log(`O número é primo, pois é divisível por ${i}`)
        break
    }else if(num-1 == i && num%i != 0){
        console.log("O número é primo")
    }
}