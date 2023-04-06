const http = require('http')

const server = http.createServer((req, res) => {
    //exibindo metodo http
    console.log(req.method)
    //exibindo url
    console.log(req.url)
    res.statusCode = 200;
    //Exibindo o Hello na tela
    res.end('<h1>Hello World</h1>')
})

server.listen(3000, () => {
    console.log("Servidor Ativo!")
})