const userHandler = require('./user.js')
const chatHandler = require('./chat.js')
const bangHandler = require('./bang.js')

const reducer = message => (result, handler) => {
  if (result.action || result.command)
    return result
  return handler(message)
}

const handle = store => {
  const handlers = [chatHandler, userHandler, bangHandler(store)]

  return message => {
    message.id = message.message_id
    return handlers.reduce(reducer(message), {})
  }
}

module.exports = handle
