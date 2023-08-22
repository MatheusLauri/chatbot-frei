// chamando o gerador do qr code
const qrcode = require('qrcode-terminal')

// chamando lib que vai permitir criarmos o nosso chatbot
const { Client } = require('whatsapp-web.js')


const client = new Client()

// chama o qr code para acessar o whats 
client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
})


client.on('ready', () => {
    console.log('Whatsapp já está conectado!')
})

client.initialize()


client.on('message', message => {
    if (message.body === 'meiota') {
        client.sendMessage(message.from, 'Olá, Você está falando com o nosso assistente virtual!')
        client.sendMessage(message.from, 'Das opções abaixo, qual voce mais se identifica com o seu problema ?\n1- Normas do instituto \n2- Realização de matricula \n3- Informações sobre o uniforme \n4- sair')
    }


    if (message.body !== null && message.body === '1')
        client.sendMessage(message.from, "Acesse as normas de convivencia pelo link a seguir: https://acaonsfatima.org.br/2022/01/22/normas-2023/")

    else if (message.body !== null && message.body === '2')
        client.sendMessage(message.from, "A Realização da matricula é feita presencialmente, se informe no numero TEL: (11) 5687-8876/(11) 3798-5036 para ver se voce foi aprovado no precesso seletivo para a realização da matricula")

    else if (message.body !== null && message.body === '3')
        client.sendMessage(message.from, "A compra dos uniformes fica no endereço:  Adão Rocumback, 50 - Veleiros. TEL: (11) 95075-0011")

    else if (message.body === null)
        client.sendMessage(message.from, "Não consegui reconhecer esse tipo, verifica se escreveu o numero corretamente")
})