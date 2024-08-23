let texto = "Aprendendo JavaScript é divertido e recompensador!";

// Converter o valor de texto para maiúsculas e exibir no console
let textoMaiusculas = texto.toUpperCase();
console.log(textoMaiusculas);

// Verificar se texto contém a palavra "divertido" e exibir o resultado no console
let contemDivertido = texto.includes("divertido");
console.log(contemDivertido);

// Dividir texto em um array de palavras e exibir o array resultante no console
let arrayPalavras = texto.split(" ");
console.log(arrayPalavras);

// Juntar as palavras do array resultante em uma única string, separadas por hífens, e exibir o resultado no console
let textoHifens = arrayPalavras.join("-");
console.log(textoHifens);