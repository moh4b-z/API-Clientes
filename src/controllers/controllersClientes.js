const servicesClientes = require("../../services/servicesClientes")

async function postClientes (request, response) {
    let contentType = request.headers['content-type']
    
    let dadosBody = request.body

    let resultClientes = await servicesClientes.inserirClientes(dadosBody, contentType)

    response.status(resultClientes.status_code)
    response.json(resultClientes)
}
async function getSearchAllClientes(request, response) {
    let resultClientes = await servicesClientes.listarTodosClientes()

    response.status(resultClientes.status_code)
    response.json(resultClientes)
}

async function getSearchClientes(request, response) {
    let idClientes = request.params.id
    let resultClientes = await servicesClientes.buscarClientes(idClientes)

    response.status(resultClientes.status_code)
    response.json(resultClientes)
}

async function deleteClientes(request, response) {
    let idClientes = request.params.id
    let resultClientes = await servicesClientes.excluirClientes(idClientes)

    response.status(resultClientes.status_code)
    response.json(resultClientes)
}
async function putClientes(request, response) {
    let idClientes = request.params.id
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultClientes = await servicesClientes.atualizarClientes(dadosBody, idClientes, contentType)

    response.status(resultClientes.status_code)
    response.json(resultClientes)
}


module.exports = {
    postClientes,
    putClientes,
    deleteClientes,
    getSearchAllClientes,
    getSearchClientes
}