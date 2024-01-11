const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
	puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready to handle messages!');
});

client.on('message', async message => {
	client.sendMessage(message.from, 'I use Signal 🔐 \n\nhttps://signal.org/');
});

client.initialize();