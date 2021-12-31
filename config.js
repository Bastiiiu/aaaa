module.exports = {
    app: {
        px: '=',
        token: 'OTI2NTA4Njk0MjExMDEwNTYw.Yc8sdg.3ixOTIjxmfjNI_5jErzQArFJ7Go',
        playing: 'saludo pa los fanes'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
