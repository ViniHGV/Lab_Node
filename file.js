const fs = require('fs')

        //nome do arq      conteúdo     erro
fs.writeFile('test.txt', 'Olá NodeJs\n', err =>{
    console.log(err)
})

fs.rename('test.txt', 'test2.txt' , err =>{
    console.log(err)
})