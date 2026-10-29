alert("Bem-vindo à Vinheria Agnello!");
const vinho = [

    { nome: "Cabernet", tipo: "tinto", safra: 2022, estoque: 10 },

    { nome: "Chardonnay", tipo: "branco", safra: 2023, estoque: 3 },

    { nome: "Merlot", tipo: "tinto", safra: 2021, estoque: 4 },

    { nome: "Branco da Vinícola", tipo: "branco", safra: 2020, estoque: 8 }

];

function adicionarVinho(nome, tipo, safra, estoque) {

    vinho.push({

        nome: nome,

        tipo: tipo,

        safra: safra,

        estoque: estoque

    });

}

function listarVinho() {

    console.log("=== TODOS OS VINHOS ===");

    vinho.forEach(function (vinho) {

        console.log(

            vinho.nome + " | Tipo: " + vinho.tipo +

            " | Safra: " + vinho.safra +

            " | Estoque: " + vinho.estoque

        );

    });

}

function listarEstoqueBaixo() {

    const vinhosBaixoEstoque = vinho.filter(function (vinho) {

        return vinho.estoque < 5;

    });

    console.log("=== VINHOS COM ESTOQUE ABAIXO DE 5 ===");

    if (vinhosBaixoEstoque.length === 0) {

        console.log("Nenhum vinho com estoque baixo.");

    } else {

        vinhosBaixoEstoque.forEach(function (vinho) {

            console.log(vinho.nome + " | Estoque: " + vinho.estoque);

        });

    }

}

function calcularEstoqueTotal() {

    const total = vinho.reduce(function (soma, vinho) {

        return soma + vinho.estoque;

    }, 0);

    console.log("=== ESTOQUE TOTAL ===");

    console.log(total + " unidades");

}

function listarNomesMaiusculos() {

    const nomes = vinho.map(function (vinho) {

        return vinho.nome.toUpperCase();

    });

    console.log("=== NOMES EM MAIÚSCULAS ===");

    console.log(nomes);

}

adicionarVinho("Malbec", "tinto", 2021, 6);

listarVinhos();

listarEstoqueBaixo();

calcularEstoqueTotal();

listarNomesMaiusculos();


