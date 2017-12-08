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

const removeEntry = ({ id, chat, from, text }) => {
  const parts = text.split(' ')

  if (parts.length < 2) {
    const command = bot.reply(
      chat.id,
      id,
      'Wrong number of arguments, usage: /remove! name'
    )
    return { command }
  }

  const name = parts[1]
  const action = actions.removeEntry(from.id, name)
  return { action }
}

const setChatEntry = ({ id, chat, text }) => {
  const parts = text.split(' ')

  if (parts.length < 3) {
    const command = bot.reply(
      chat.id,
      id,
      'Wrong number of arguments, usage: /set!! name message'
    )
    return { command }
  }

  const name = parts[1]
  const message = parts.slice(2).join(' ')
  const action = actions.setChatEntry(chat.id, name, message)
  return { action }
}

const removeChatEntry = ({ id, chat, text }) => {
  const parts = text.split(' ')

  if (parts.length < 2) {
    const command = bot.reply(
      chat.id,
      id,
      'Wrong number of arguments, usage: /remove!! name'
    )
    return { command }
  }

  const name = parts[1]
  const action = actions.removeChatEntry(chat.id, name)
  return { action }
}

const handler = message => {
  const text = message.text
  if (!text) return

  if (text.startsWith('/set!!')) return setChatEntry(message)
  else if (text.startsWith('/remove!!')) return removeChatEntry(message)
  else if (text.startsWith('/remove!')) return removeEntry(message)
  else if (text.startsWith('/set!')) return setEntry(message)
}

module.exports = handler
