const actions = require('./actions')
const bot = require('./bot')

const setEntry = ({ id, chat, from, text }) => {
  const parts = text.split(' ')

  if (parts.length < 3) {
    const command = bot.reply(
      chat.id,
      id,
      'Wrong number of arguments, usage: /set! name message'
    )
    return { command }
  }

  const name = parts[1]
  const message = parts.slice(2).join(' ')
  const action = actions.setEntry(from.id, name, message)
  return { action }
}

const handler = message => {
  const text = message.text
  if (!text) return

  if (text.startsWith('/set!')) return setEntry(message)
}

module.exports = handler
