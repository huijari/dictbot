const bot = require('../bot')

const handler = ({ getState }) => ({ text, from, chat }) => {
  if (!text || !text.startsWith('!')) return {}

  const key = text.substring(1)

  const chatMessage = getState().chat.getIn([chat.id, key])

  if (chatMessage) {
    const command = bot.send(chat.id, chatMessage)
    return { command }
  }

  const userMessage = getState().user.getIn([from.id, key])

  if (userMessage) {
    const command = bot.send(chat.id, userMessage)
    return { command }
  }

  return {}
}

module.exports = handler
