const actions = require('./actions')

const setEntry = ({ from, text }) => {
  const parts = text.split(' ')

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
