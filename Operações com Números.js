let num1 = 200.456;
let num2 = 150.789;

// Arredondar num1 para o valor inteiro mais próximo e exibir no console
let num1Arredondado = Math.round(num1);
console.log(num1Arredondado);

// Encontrar o valor máximo e mínimo entre num1 e num2 usando Math.max e Math.min, respectivamente, e exibir no console
let valorMaximo = Math.max(num1, num2);
let valorMinimo = Math.min(num1, num2);
console.log("Valor máximo:", valorMaximo);
console.log("Valor mínimo:", valorMinimo);

// Calcular a raiz quadrada de num2 e exibir no console
let raizQuadradaNum2 = Math.sqrt(num2);
console.log("Raiz quadrada de num2:", raizQuadradaNum2);

// Converter num1 para uma string com notação científica e exibir no console
let num1NotacaoCientifica = num1.toExponential();
console.log("num1 em notação científica:", num1NotacaoCientifica);