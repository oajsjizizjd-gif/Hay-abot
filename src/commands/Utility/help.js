export default {
  name: "help",
  description: "Commandes du bot",

  execute(message) {
    message.channel.send(
`📌 COMMANDES :
+help - affiche les commandes
+ping - test du bot`
    );
  }
};
