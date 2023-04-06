const process = require('process');

//Exibição de texto na tela
process.stdout.write('Qual o seu nome ?\n')

//Entrada de dados
process.stdin.on('data', (Keyboard) => {
    //Exibição de texto na tela
    process.stdout.write(`Seu nome é: ${Keyboard}`)
    //Finalizando processo do process
    process.exit();
})