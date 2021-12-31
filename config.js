module.exports = {
    app: {
        px: '"',
        token: 'ODgwMTkwMTUwMTM3Nzc0MDkw.YSaq9A.HpoH-mHVRJKpcfxn4-3z2AyKchA',
        playing: 'Bast te meo'
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
