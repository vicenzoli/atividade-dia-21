let x = 8;
let y = 12;
let z = 8;

// Comparar se x é maior ou igual a y e exibir o resultado no console
let xMaiorOuIgualY = x >= y;
console.log("x é maior ou igual a y:", xMaiorOuIgualY);

// Verificar se x é diferente de z (usando !=) e se x é estritamente diferente de z (usando !==) e exibir os resultados no console
let xDiferenteDeZ = x != z;
let xEstritamenteDiferenteDeZ = x !== z;
console.log("x é diferente de z:", xDiferenteDeZ);
console.log("x é estritamente diferente de z:", xEstritamenteDiferenteDeZ);

// Usar uma expressão lógica para verificar se x é menor que y e z é maior que x e exibir o resultado no console
let xMenorQueY_ZMaiorQueX = (x < y) && (z > x);
console.log("x é menor que y e z é maior que x:", xMenorQueY_ZMaiorQueX);

// Usar uma expressão lógica para verificar se x é igual a z ou y é menor que z e exibir o resultado no console
let xIgualAZ_OuYMenorQueZ = (x === z) || (y < z);
console.log("x é igual a z ou y é menor que z:", xIgualAZ_OuYMenorQueZ);