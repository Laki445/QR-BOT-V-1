module.exports = {
  command: 'menu',
  run: async (sock, m) => {
    const txt = `
📜 *Bot Menu*:
• .alive - Bot Status
• .menu - This menu
• .ping - Check speed
    `.trim();
    await sock.sendMessage(m.key.remoteJid, { text: txt });
  }
};
