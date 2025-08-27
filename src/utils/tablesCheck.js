const CORRECTION = require("./inputCheck")


function CHECK_tbl_clientes(cliente){    
    if(
        CORRECTION.CHECK_VARCHAR_NOT_NULL(cliente.nome, 80) &&
        CORRECTION.CHECK_idade(cliente.idade)
    ){
        return true
    }else{
        return false
    }
}


module.exports = {
    CHECK_tbl_clientes
}