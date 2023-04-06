const process = require('process');

process.stdout.write('Qual o seu nome ?\n')

process.stdin.on('data', (Keyboard) => {
    process.stdout.write(`Seu nome é: ${Keyboard}`)
    process.exit();
})