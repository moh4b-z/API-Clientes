// mock do ClientesDAO
jest.mock('../../model/DAO/clientes', () => ({
  insertClientes: jest.fn(),
  updateClientes: jest.fn(),
  deleteClientes: jest.fn(),
  selectAllClientes: jest.fn(),
  selectByIdClientes: jest.fn()
}))
jest.mock('../../utils/tablesCheck', () => ({
    CHECK_tbl_clientes: jest.fn().mockReturnValue(true)
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

        ClientesDAO.insertClientes.mockResolvedValue(true)

        const result = await servicesClientes.inserirClientes(cliente, contentType)

        expect(ClientesDAO.insertClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.insertClientes).toHaveBeenCalledWith(cliente)
        expect(result).toBe(MENSAGE.SUCCESS_CEATED_ITEM)
    })
    test("atualizarClientes teste", async () => {
        const id = 1
        const cliente = {nome: "Mohammad", idade: 18}
        const contentType = "application/json"

        ClientesDAO.insertClientes.mockResolvedValue(true)

        const result = await servicesClientes.atualizarClientes(cliente, id, contentType)

        expect(ClientesDAO.updateClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.updateClientes).toHaveBeenCalledWith(cliente)
        expect(result).toBe(MENSAGE.SUCCESS_UPDATED_ITEM)
    })
})