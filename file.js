const fs = require('fs')
        //nome do arq      conteúdo     erro
fs.writeFile('test.txt', 'Olá NodeJs', err =>{
    console.log(err)
})