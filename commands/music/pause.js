module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... try again ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Musica actual ${queue.current.title} pausada✅` : `Algo salió mal ${message.author}... try again ? ❌`);
    },
};