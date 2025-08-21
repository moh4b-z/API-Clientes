const servicesSexo = require("../../services/usuario/servicesSexo")

async function postCliente (request, response) {
    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let resultSexo = await servicesSexo.inserirSexo(dadosBody, contentType)

    response.status(resultSexo.status_code)
    response.json(resultSexo)
}
async function getSearchAllCliente(request, response) {
    let resultSexo = await servicesSexo.listarTodosSexo()

    response.status(resultSexo.status_code)
    response.json(resultSexo)
}

async function getSearchCliente(request, response) {
    let idSexo = request.params.idSexo
    let resultSexo = await servicesSexo.buscarSexo(idSexo)

    response.status(resultSexo.status_code)
    response.json(resultSexo)
}

async function deleteCliente(request, response) {
    let idSexo = request.params.idSexo
    let resultSexo = await servicesSexo.excluirSexo(idSexo)

    response.status(resultSexo.status_code)
    response.json(resultSexo)
}
async function putCliente(request, response) {
    let idSexo = request.params.idSexo
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultSexo = await servicesSexo.atualizarSexo(dadosBody, idSexo, contentType)

    response.status(resultSexo.status_code)
    response.json(resultSexo)
}


module.exports = {
    postSexo,
    putSexo,
    deleteSexo,
    getSearchAllSexo,
    getSearchSexo
}