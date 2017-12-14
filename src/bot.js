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

const request = ({ fetch, token }, method, params) =>
  fetch(`api.telegram.org/bot${token}/${method}?${params}`)
const requestSendd = (conf, { chat, text }) =>
  request(conf, 'sendMessage', `chat_id=${chat}&text=${text}`)
const requestReply = (conf, { chat, message, text }) =>
  request(
    conf,
    'sendMessage',
    `chat_id=${chat}&text=${text}&reply_to_message_id=${message}`
  )

const dispatch = conf => command => {
  switch (command.type) {
    case SEND:
      return requestSend(conf, command)
    case REPLY:
      return requestReply(conf, command)
  }
}

module.exports = {
  SEND,
  send,
  REPLY,
  reply,
  dispatch
}
