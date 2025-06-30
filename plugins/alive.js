module.exports = {
  command: 'alive',
  run: async (sock, m) => {
    await sock.sendMessage(m.key.remoteJid, {
      text: '✅ Bot is alive and responding!'
    });
  }
};
