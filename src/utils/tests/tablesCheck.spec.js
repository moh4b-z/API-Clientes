// DESCRIBE -> bloco de testes - test swites: vai declara um conjunto de testes, por exemplo ser der certo e errado uma função
// IT or TEST -> declara um teste unitario - test cases
// EXPECT -> faz a asserções acerca do resultado do teste, ajudar a validar resultados
// executar npm test
const TableCORRECTION = require("../tablesCheck")

describe("Table CORRECTION testes", () => {
    test("CHECK_tbl_clientes teste", () => {
        const cliente = {nome: "Mohammad", idade: 18}

        let result = TableCORRECTION.CHECK_tbl_clientes(cliente)

        expect(result).toEqual(true)
    })
})