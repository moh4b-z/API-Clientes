// mock do ClientesDAO
jest.mock('../../model/DAO/clientes', () => ({
  insertClientes: jest.fn(),
  updateClientes: jest.fn(),
  deleteClientes: jest.fn(),
  selectAllClientes: jest.fn(),
  selectByIdClientes: jest.fn()
}))
const ClientesDAO = require("../../model/DAO/clientes")
const servicesClientes = require("../servicesClientes")
const MENSAGE = require("../../modulo/config")


describe("Table ClientesDAO testes", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test("inserirClientes teste", async () => {
        const cliente = {nome: "Mohammad", idade: 18}
        const contentType = "application/json"

        const result = await servicesClientes.inserirClientes(cliente, contentType)

        expect(ClientesDAO.insertClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.insertClientes).toHaveBeenCalledWith(cliente)
        expect(result).toBe(MENSAGE.SUCCESS_CEATED_ITEM)
    })
})