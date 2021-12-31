module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}...  ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Musica actual ${queue.current.title} Skipeada  ✅` : `Algo malio sal ${message.author}...  ❌`);
    },
};