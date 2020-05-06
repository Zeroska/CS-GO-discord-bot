const Discord = require("discord.io");
const auth = require("./auth.json");
const logger = require("winston");

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";

let bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});
bot.on("ready", (evt) => {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});

bot.on("message", (user, userID, channelID, message, evt) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case "ping":
        {
          bot.sendMessage({
            to: channelID,
            message: "Pong!",
          });
        }
        break;
      case "Config": {
          bot.sendMessage({
              to: channelID,
              message: "CS GO",
          });
      }
      break;
      // Just add any case commands if you want to..
    }
  }
});
