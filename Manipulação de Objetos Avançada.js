let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São José",
        estado: "SC"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

// Acessar e exibir o valor da propriedade cidade do endereco
console.log("Cidade:", pessoa.endereco.cidade);

// Atualizar a propriedade profissao para um novo valor
pessoa.profissao = "Desenvolvedor";
console.log("Objeto atualizado após mudar a profissão:", pessoa);

// Adicionar uma nova propriedade telefone ao objeto pessoa
pessoa.telefone = "1234-5678";
console.log("Objeto atualizado após adicionar telefone:", pessoa);