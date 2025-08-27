const MENSAGE = require("../../modulo/config")
const CORRECTION = require("../../utils/inputCheck")
const TableCORRECTION = require("../../utils/tablesCheck")

const ClientesDAO = require("../../model/DAO/Clientes")
// const { log } = require("console")

async function inserirClientes(Clientes, contentType) {
    try {
        if(contentType == "application/json"){
            // console.log(Clientes);
            // console.log(TableCORRECTION.CHECK_tbl_Clientes(Clientes));
            
            
            if(TableCORRECTION.CHECK_tbl_Clientes(Clientes)){
                let resultClientes = await ClientesDAO.insertClientes(Clientes)
                if (resultClientes){
                    return MENSAGE.SUCCESS_CEATED_ITEM
                }else{
                    return MENSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
                
            }else{
                return MENSAGE.ERROR_REQUIRED_FIELDS
            }
        }else{
            return MENSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        // console.log(error)
        return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
    }
    
}

async function atualizarClientes(Clientes, idClientes, contentType) {
    try {
        if(contentType == "application/json"){
            // console.log(Clientes);
            // console.log(CORRECTION.verificarAtributosClientes(Clientes));
            // console.log(CORRECTION.CHECK_ID(idClientes));
            // console.log((Clientes));
            // console.log((idClientes));
            
            
            if(TableCORRECTION.CHECK_tbl_Clientes(Clientes) && CORRECTION.CHECK_ID(idClientes)){

                let resultClientes = await buscarClientes(parseInt(idClientes))
                
                

                if(resultClientes.status_code == 201){

                    Clientes.id = parseInt(idClientes)
                    

                    let result = await ClientesDAO.updateClientes(Clientes)
                    // console.log(result)
                    
                    if(result){
                        return MENSAGE.SUCCESS_UPDATED_ITEM
                    }else{
                        console.log(result);
                        
                        return MENSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }

                }else if(resultClientes.status_code == 404){

                    return MENSAGE.ERROR_NOT_FOUND
                }else{
                    
                    
                    return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
                }
                
            }else{
                return MENSAGE.ERROR_REQUIRED_FIELDS
            }
        }else{

            return MENSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        
        return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
    }
}

async function excluirClientes(idClientes) {
    try { 
        if(CORRECTION.CHECK_ID(idClientes)){
            let verification = await ClientesDAO.selectByIdClientes(parseInt(idClientes))

            if(verification != false || typeof(verification) == 'object'){
                if(verification.length > 0){
                    let resultClientes = await ClientesDAO.deleteClientes(parseInt(idClientes))
                    return resultClientes ? MENSAGE.SUCCESS_DELETE_ITEM : MENSAGE.ERROR_NOT_DELETE
                }else{
                    return MENSAGE.ERROR_NOT_FOUND
                }
            }else{
                return MENSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }else{
            return MENSAGE.ERROR_REQUIRED_FIELDS
        }
        
        
    } catch (error) {
        return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
    }
}

async function listarTodosClientes() {
    try {
        let resultClientes = await ClientesDAO.selectAllClientes()

        if(resultClientes != false || typeof(resultClientes) == 'object'){
            if(resultClientes.length > 0){
                let dadosClientess = {
                    "status": true,
                    "status_code": 201,
                    "items": resultClientes.length,
                    "sexes": resultClientes
                }
                return dadosClientess
            }else{
                return MENSAGE.ERROR_NOT_FOUND
            }
        }else{
            return MENSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        
    } catch (error) {
        return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
    }
}

async function buscarClientes(idClientes) {
    try {
        // console.log(idClientes);
        
        if(CORRECTION.CHECK_ID(idClientes)){
            let resultClientes = await ClientesDAO.selectByIdClientes(parseInt(idClientes))

            if(resultClientes != false || typeof(resultClientes) == 'object'){
                if(resultClientes.length > 0){
                    let dadosClientess = {
                        "status": true,
                        "status_code": 201,
                        "sex": resultClientes
                    }
                    return dadosClientess
                }else{
                    return MENSAGE.ERROR_NOT_FOUND
                }
            }else{
                return MENSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }else{
            return MENSAGE.ERROR_REQUIRED_FIELDS
        }
        
        
    } catch (error) {
        return MENSAGE.ERROR_INTERNAL_SERVER_SERVICES
    }
}



module.exports = {
    inserirClientes,
    atualizarClientes,
    excluirClientes,
    listarTodosClientes,
    buscarClientes
}