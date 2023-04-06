const fs = require('fs')

        //nome do arq      conteúdo     erro
fs.writeFile('test.txt', 'Olá NodeJs\n', err =>{
    console.log(err)
})