const SEND = 'SEND'
const send = (chat, text) => ({
  type: SEND,
  chat,
  text
})

const REPLY = 'REPLY'
const reply = (chat, message, text) => ({
  type: REPLY,
  chat,
  message,
  text
})

module.exports = {
  SEND,
  send,
  REPLY,
  reply
}
