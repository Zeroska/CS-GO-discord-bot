const Discord = require("discord.js");
const logger = require("winston");
const { prefix, token } = require("./config.json");
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";

const bot = new Discord.Client();
bot.on("ready", (evt) => {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});


bot.on("message", (msg) => {
  let arg = msg.slice()
  if (msg.content === `${prefix}bomb`) {
    const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle("Nade server commands (Click here)")
      // Set the color of the embed
      .setColor(0x00ff00)
      // Set the main content of the embed
      .setDescription(
        "Copy this file to your cs go config file, -> go to cs go console and exec nadeking"
      )
      //The link is belong to nadeking, I have no claim about this config file, all credit goes to nadeking
      .setURL( 
        "https://wix.anyfileapp.net/dl?id=553246736447566b58312f486a3832767a7230416f7847706474327144774d3246375548503549345561446559744e7136554975416e733456334c666e4b586b572b4c504f4e483847457650346c4477747476754f673d3d"
      );
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  } else if (msg.content === `${prefix}help`) {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle("Command the bot can handle")
    .setColor(0x00ff00)
    .setDescription("the prefix is !\n the list of command:\n1. bomb\n2. proConfig")
    msg.channel.send(helpEmbed); 
    //This command need to be pay more attention
  } else if (msg.content === `${prefix}proConfig`){
    const configEmbed = new Discord.MessageEmbed()
    .setTitle(`${player} config`)
    .setColor(0x00ff00)
    .setDescription()
  }
});

bot.login(token);
