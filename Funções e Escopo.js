function soma(a, b) {
    return a + b;
}

// Função ehPar que recebe um número como parâmetro e retorna true se o número for par, ou false se for ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}

// Função dobraValores que recebe um array de números e retorna um novo array com cada valor dobrado
function dobraValores(array) {
    return array.map(valor => valor * 2);
}

// Função contaCaracteres que recebe uma string e retorna o número de caracteres na string
function contaCaracteres(string) {
    return string.length;
}

// Função fatorial que calcula o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// Exemplos de uso das funções
console.log("Soma de 5 e 3:", soma(5, 3)); // 8
console.log("O número 4 é par?", ehPar(4)); // true
console.log("O número 7 é par?", ehPar(7)); // false
console.log("Dobrar valores [1, 2, 3]:", dobraValores([1, 2, 3])); // [2, 4, 6]
console.log("Número de caracteres em 'Olá':", contaCaracteres("Olá")); // 3
console.log("Fatorial de 5:", fatorial(5)); // 120