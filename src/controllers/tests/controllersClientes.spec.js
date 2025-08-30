
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
    test("getSearchAllClientes teste", async () => {
        const request = {
            params: {id: 1}
        }
        const response = {
            status: jest.fn(),
            json: jest.fn()
        }
        const clientes = [{ id: 1, nome: "Mohammad", idade: 18 }]
        const resposta = {
                        "status": true,
                        "status_code": 200,
                        "items": clientes.length,
                        "result": clientes
                    }

        servicesClientes.listarTodosClientes.mockResolvedValue(resposta)

        await controllersClientes.getSearchAllClientes(request, response)

        expect(servicesClientes.listarTodosClientes).toHaveBeenCalledTimes(1)
        expect(response.status).toHaveBeenCalledWith(resposta.status_code)
        expect(response.json).toHaveBeenCalledWith(resposta)
    })
    test("getSearchClientes teste", async () => {
        const request = {
            params: {id: 1}
        }
        const response = {
            status: jest.fn(),
            json: jest.fn()
        }
        const clientes = [{ id: 1, nome: "Mohammad", idade: 18 }]
        const resposta = {
                        "status": true,
                        "status_code": 200,
                        "items": clientes.length,
                        "result": clientes
                    }

        servicesClientes.buscarClientes.mockResolvedValue(resposta)

        await controllersClientes.getSearchClientes(request, response)

        expect(servicesClientes.buscarClientes).toHaveBeenCalledTimes(1)
        expect(servicesClientes.buscarClientes).toHaveBeenCalledWith(request.params.id)
        expect(response.status).toHaveBeenCalledWith(resposta.status_code)
        expect(response.json).toHaveBeenCalledWith(resposta)
    })
    test("deleteClientes teste", async () => {
        const request = {
            params: {id: 1}
        }
        const response = {
            status: jest.fn(),
            json: jest.fn()
        }

        servicesClientes.excluirClientes.mockResolvedValue(MENSAGE.SUCCESS_DELETE_ITEM)

        await controllersClientes.deleteClientes(request, response)

        expect(servicesClientes.excluirClientes).toHaveBeenCalledTimes(1)
        expect(servicesClientes.excluirClientes).toHaveBeenCalledWith(request.params.id)
        expect(response.status).toHaveBeenCalledWith(MENSAGE.SUCCESS_DELETE_ITEM.status_code)
        expect(response.json).toHaveBeenCalledWith(MENSAGE.SUCCESS_DELETE_ITEM)
    })
    test("putClientes teste", async () => {
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

        servicesClientes.atualizarClientes.mockResolvedValue(MENSAGE.SUCCESS_UPDATED_ITEM)

        await controllersClientes.putClientes(request, response)

        expect(servicesClientes.atualizarClientes).toHaveBeenCalledTimes(1)
        expect(servicesClientes.atualizarClientes).toHaveBeenCalledWith(cliente, request.params.id, "application/json")
        expect(response.status).toHaveBeenCalledWith(MENSAGE.SUCCESS_UPDATED_ITEM.status_code)
        expect(response.json).toHaveBeenCalledWith(MENSAGE.SUCCESS_UPDATED_ITEM)
    })
})