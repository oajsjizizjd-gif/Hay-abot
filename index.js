import './src/app.js';if (message.author.bot) return;

const prefix = "+";

if (!message.content.startsWith(prefix)) return;

const command = message.content.slice(prefix.length).trim().toLowerCase();

if (command === "help") {
  message.channel.send("📌 Commandes : +help, +ping");
}

