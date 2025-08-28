const { PrismaClient } = require('@prisma/client')
const ClientesDAO = require("../clientes")

// mock do prisma
jest.mock('@prisma/client', () => {
  const mPrisma = {
    $executeRawUnsafe: jest.fn(),
    $queryRawUnsafe: jest.fn(),
  }
  return { PrismaClient: jest.fn(() => mPrisma) }
})

const prisma = new PrismaClient()

describe("Table ClientesDAO testes", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    test("insertClientes teste", async () => {
        prisma.$executeRawUnsafe.mockResolvedValueOnce(1) // simula sucesso
        const cliente = {nome: "Mohammad", idade: 18}

        const result = await ClientesDAO.insertClientes(cliente)

        expect(prisma.$executeRawUnsafe).toHaveBeenCalledTimes(1)
        expect(result).toBe(true)
    })
    test("updateClientes teste", async () => {
        prisma.$executeRawUnsafe.mockResolvedValueOnce(1) // simula sucesso
        const cliente = {nome: "Mohammad Salim", idade: 17}

        const result = await ClientesDAO.updateClientes(cliente)

        expect(prisma.$executeRawUnsafe).toHaveBeenCalledTimes(1)
        expect(result).toBe(true)
    })
    test("deleteClientes teste", async () => {
        prisma.$executeRawUnsafe.mockResolvedValueOnce(1) // simula sucesso
        const id = 1

        const result = await ClientesDAO.deleteClientes(id)

        expect(prisma.$executeRawUnsafe).toHaveBeenCalledTimes(1)
        expect(result).toBe(true)
    })
    test("selectAllClientes teste", async () => {
        const exemploDeDados = [
            { id: 1, nome: "Mohammad", idade: 18 }
        ]
        prisma.$queryRawUnsafe.mockResolvedValueOnce(exemploDeDados) // simula sucesso
        const result = await ClientesDAO.selectAllClientes()

        expect(prisma.$queryRawUnsafe).toHaveBeenCalledTimes(1)
        expect(result).toBe(exemploDeDados)
    })
    test("selectByIdClientes teste", async () => {
        const exemploDeDados = [
            { id: 1, nome: "Mohammad", idade: 18 }
        ]
        prisma.$queryRawUnsafe.mockResolvedValueOnce(exemploDeDados) // simula sucesso
        const id = 1

        const result = await ClientesDAO.selectByIdClientes(id)

        expect(prisma.$queryRawUnsafe).toHaveBeenCalledTimes(1)
        expect(result).toBe(exemploDeDados)
    })
})