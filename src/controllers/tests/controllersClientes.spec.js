// mock do ClientesDAO
jest.mock('../../services/servicesClientes', () => ({
  inserirClientes: jest.fn(),
  atualizarClientes: jest.fn(),
  excluirClientes: jest.fn(),
  listarTodosClientes: jest.fn(),
  buscarClientes: jest.fn()
}))
const servicesClientes = require("../../services/servicesClientes")
const controllersClientes = require("../controllersClientes")
const MENSAGE = require("../../modulo/config")


describe("Da controllersClientes testes", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test("postClientes teste", async () => {
        const cliente = {nome: "Mohammad", idade: 18}
        const request = {
            headers: {
                "content-type":  "application/json"
            },
            body: cliente,
            params: {id: 1}
        }
        const response = {
            status: jest.fn(),
            json: jest.fn()
        }


        servicesClientes.inserirClientes.mockResolvedValue(MENSAGE.SUCCESS_CEATED_ITEM)

        await controllersClientes.postClientes(request, response)

        expect(servicesClientes.inserirClientes).toHaveBeenCalledTimes(1)
        expect(servicesClientes.inserirClientes).toHaveBeenCalledWith(cliente, "application/json")
        expect(response.status).toHaveBeenCalledWith(MENSAGE.SUCCESS_CEATED_ITEM.status_code)
        expect(response.json).toHaveBeenCalledWith(MENSAGE.SUCCESS_CEATED_ITEM)
    })
})