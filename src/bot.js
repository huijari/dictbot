const SEND = 'SEND'
const send = (chat, message) => ({
  type: SEND,
  chat,
  message
})

const REPLY = 'REPLY'
const reply = (chat, message, content) => ({
  type: REPLY,
  chat,
  message,
  content
})

module.exports = {
  SEND,
  send,
  REPLY,
  reply
}
