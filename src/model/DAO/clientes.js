const { PrismaClient } = require('@prisma/client')
//Instancia da classe do prisma client, para gera um objeto
const prisma = new PrismaClient()

// inseri
async function insertClientes(Clientes){
    try {
        
        let sql = `insert into tbl_clientes (
                                            nome,
                                            sigla                              
                                        ) values (
                                            '${Clientes.nome}',
                                            '${Clientes.sigla}'
                                        )`

        //executar script no BD        
        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        // console.log(error)
        return false
    }
}

// atualizar
async function updateClientes(Clientes){
    try {
        let sql = `update tbl_clientes set  nome = '${Clientes.nome}',
                                        sigla = '${Clientes.sigla}'                      
                                        
                                where id = ${Clientes.id}`
        console.log(sql);
        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        // console.log(error);
        
        return false
    }
}

// deletar
async function deleteClientes(idClientes){
    try {
        let sql = `DELETE FROM tbl_clientes WHERE id = ${idClientes}`
        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        return false
    }
}

// select de todos os jogos
async function selectAllClientes(){
    try {
        let sql = 'select * from tbl_clientes order by id desc'
        let result = await prisma.$queryRawUnsafe(sql)

        return result ? result : false
    } catch (error) {
        return false
    }
}

// filtro pelo ID
async function selectByIdClientes(idClientes){
    try {
        let sql = `SELECT * FROM tbl_clientes WHERE id = ${idClientes}`
        // console.log(sql);
        
        let result = await prisma.$queryRawUnsafe(sql)

        return result ? result : false
    } catch (error) {
        // console.log(error);
        
        return false
    }
}

module.exports = {
    insertClientes,
    updateClientes,
    deleteClientes,
    selectAllClientes,
    selectByIdClientes
}