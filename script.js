console.log("Mod 2 - Task 3")
console.log("1 - Criar um loop que conte de 1 até 10 usando FOR")
for(let counter = 1; counter <= 10; counter++){
    console.log(counter)
}
console.log("2 - Criar um loop que conte de 10 até 1 usando WHILE")
let counter = 10;
while(counter >=1){
    console.log(counter)
    --counter;
}

console.log("3 - Criar um loop que conte todos os números ímpares de 1 até 100")
for(impar = 1; impar <= 100; impar++){
    if (impar % 2 != 0 ) {  
        console.log(impar)
    }
    }
console.log("4- Criar um loop que conte todos os números pares de 0 a 100")
for(par = 0; par <= 100; par++){
    if (par % 2 ===0) {  
        console.log(par)
    }
    }