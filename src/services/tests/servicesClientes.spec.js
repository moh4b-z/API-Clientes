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
        const cliente = { nome: "Mohammad", idade: 18 }
        const contentType = "application/json"

        // mock para buscar cliente existente
        ClientesDAO.selectByIdClientes.mockResolvedValue([cliente])
        // mock para update com sucesso
        ClientesDAO.updateClientes.mockResolvedValue(true)

        const result = await servicesClientes.atualizarClientes(cliente, id, contentType)

        expect(ClientesDAO.updateClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.updateClientes).toHaveBeenCalledWith({ ...cliente, id })
        expect(result).toBe(MENSAGE.SUCCESS_UPDATED_ITEM)
    })
    test("excluirClientes teste", async () => {
        const id = 1
        const cliente = { nome: "Mohammad", idade: 18 }

        // mock para buscar cliente existente
        ClientesDAO.selectByIdClientes.mockResolvedValue([cliente])
        // mock para update com sucesso
        ClientesDAO.deleteClientes.mockResolvedValue(true)

        const result = await servicesClientes.excluirClientes(id)

        expect(ClientesDAO.deleteClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.deleteClientes).toHaveBeenCalledWith(id)
        expect(result).toBe(MENSAGE.SUCCESS_DELETE_ITEM)
    })
    test("listarTodosClientes teste", async () => {
        const clientes = [{ id: 1, nome: "Mohammad", idade: 18 }]
        const resposta = {
                        "status": true,
                        "status_code": 201,
                        "items": clientes.length,
                        "result": clientes
                    }
        
        // mock para buscar cliente existente
        ClientesDAO.selectAllClientes.mockResolvedValue(clientes)

        const result = await servicesClientes.listarTodosClientes()

        expect(ClientesDAO.selectAllClientes).toHaveBeenCalledTimes(1)
        expect(result).toStrictEqual(resposta)
    })
    test("buscarClientes teste", async () => {
        const id = 1
        const cliente = { id: 1, nome: "Mohammad", idade: 18 }
        const resposta = {
                        "status": true,
                        "status_code": 201,
                        "result": [cliente]
                    }
        
        // mock para buscar cliente existente
        ClientesDAO.selectByIdClientes.mockResolvedValue([cliente])

        const result = await servicesClientes.buscarClientes(id)

        expect(ClientesDAO.selectByIdClientes).toHaveBeenCalledTimes(1)
        expect(ClientesDAO.selectByIdClientes).toHaveBeenCalledWith(id)
        expect(result).toStrictEqual(resposta)
    })
})