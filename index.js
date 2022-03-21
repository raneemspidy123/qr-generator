const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3,3234, 9]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('Jonu-Xr ')}${chalk.green.bold('-Jinu-Mwol')}
${chalk.white.italic('Jinu-Mwol code recipient')}
${chalk.blue.bold('ℹ️  Connecting Jinu-Mwol... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Jinu-Mwol QR Code: '),
      'Jinu:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'Jinu:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ Jinu-Mwol Successfully Scanned✅️*\n*▪️Thanks For Choosing Jinu-Mwol 💞*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ Jinu-Mwol Successfully Scanned✅️*\n*▪️Thanks For Choosing Jinu-Mwol 💞*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
