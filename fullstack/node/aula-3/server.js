// Criando nosso primeiro servidor!
const http = require('http') // Esse módulo é baseado no EventEmitter!

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end();
    }

    if(req.url === '/reprograma') {
        res.write(JSON.stringify([1, 2, 3]));
        red.end();
    }

/*    if (req.url === '/reprograma/cursos') {
        const alunas = '[{nome: Anna}, {nome: Fulana}]'
        res.write(JSON)
    }*/
})

// Ouvindo um evento pré-existente do módulo
server.on('connection', () => {
    console.log('Página carregada')
})

server.listen(3000);
    console.log('Escutando na página 3000...')
