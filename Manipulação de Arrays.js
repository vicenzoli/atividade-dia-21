let numeros = [10, 20, 30, 40, 50];

// Adicionar o valor 60 ao final do array
numeros.push(60);
console.log("Array após adicionar 60:", numeros);

// Remover o último valor do array
let removido = numeros.pop();
console.log("Valor removido:", removido);
console.log("Array após remover o último valor:", numeros);

// Remover o terceiro elemento do array (número 30)
numeros.splice(2, 1);
console.log("Array após remover o terceiro elemento:", numeros);

// Ordenar o array em ordem decrescente
numeros.sort((a, b) => b - a);
console.log("Array em ordem decrescente:", numeros);