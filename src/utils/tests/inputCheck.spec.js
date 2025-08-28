const CORRECTION = require("../inputCheck")

describe("CORRECTION testes", () => {
    test("CHECK_ID teste", () => {
        const id = 18

        let result = CORRECTION.CHECK_ID(id)

        expect(result).toEqual(true)
    })
    test("CHECK_idade teste", () => {
        const idade = 18

        let result = CORRECTION.CHECK_idade(idade)

        expect(result).toEqual(true)
    })
    test("CHECK_VARCHAR_NOT_NULL teste", () => {
        const texto = "Mohammad"
        const letras = 8

        let result = CORRECTION.CHECK_VARCHAR_NOT_NULL(texto, letras)

        expect(result).toEqual(true)
    })

    test("CHECK_NOT_NULL teste", () => {
        const texto = "oi"

        let result = CORRECTION.CHECK_NOT_NULL(texto)

        expect(result).toEqual(true)
    })

    test("CHECK_VARCHAR teste", () => {
        const texto = ""
        const letras = 8

        let result = CORRECTION.CHECK_VARCHAR(texto, letras)

        expect(result).toEqual(true)
    })
})