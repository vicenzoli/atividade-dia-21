let nulo = null;

// Verificar se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===) e exibir os resultados no console
let nuloIgualUndefined = (nulo == undefined);
let nuloEstritamenteIgualUndefined = (nulo === undefined);
console.log("nulo == undefined:", nuloIgualUndefined);
console.log("nulo === undefined:", nuloEstritamenteIgualUndefined);

// Declarar a variável indefinido sem atribuir nenhum valor
let indefinido;

// Verificar se indefinido é NaN usando a função isNaN e exibir o resultado no console
let indefinidoEhNaN = isNaN(indefinido);
console.log("indefinido é NaN:", indefinidoEhNaN);

// Declarar a variável numStr2 com o valor "123abc" (string) e tentar convertê-la para um número
let numStr2 = "123abc";
let numConvertido = Number(numStr2);

// Verificar se o resultado é NaN e exibir o resultado no console
let numConvertidoEhNaN = isNaN(numConvertido);
console.log("numStr2 convertido é NaN:", numConvertidoEhNaN);