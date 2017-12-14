const bot = require('../bot')

const handler = ({ getState }) => ({ text, from, chat }) => {
  if (!text || !text.startsWith('!')) return {}

  const key = text.substring(1)

  const chatMessage = getState()
    .get('chat')
    .get(chat.id)
    .get(key)

  if (chatMessage) {
    const command = bot.send(chat.id, chatMessage)
    return { command }
  }

  const userMessage = getState()
    .get('user')
    .get(from.id)
    .get(key)

  if (userMessage) {
    const command = bot.send(chat.id, userMessage)
    return { command }
  }

  return {}
}

module.exports = handler
