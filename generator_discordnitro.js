const Discord = require('discord.js'); 
const client = new Discord.Client();


client.login("token");

client.on('message', message => { 
    function nitrocode(length, letter) {

var multiplier = '';
if (letter.indexOf('0') > -1) multiplier += '0123456789';
if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
var results = '';


for (var i = length; i > 0; --i) 
{
results += multiplier[Math.floor(Math.random() * multiplier.length)];

}

return results;

}
if(message.content.startsWith(".nitro")){
    const genEmbed = new Discord.RichEmbed()
        .setColor('78FF00')
        .setThumbnail(https://cdn.discordapp.com/attachments/592064932044996629/592369622049619979/gifvert.gif)
        .addField("Gift :", "|| https:/"+"/discord.gift/" + nitrocode(16,'0aA') +" ||")
    message.channel.type === ("dm") + message.channel.sendMessage(genEmbed);
    message.channel.sendMessage("Sent :)");
    }
});
