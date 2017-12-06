const SET_ENTRY = 'SET_ENTRY'
const setEntry = (user, name, message) => ({
  type: SET_ENTRY,
  user,
  name,
  message
})

const SET_CHAT_ENTRY = 'SET_CHAT_ENTRY'
const setChatEntry = (chat, name, message) => ({
  type: SET_CHAT_ENTRY,
  chat,
  name,
  message
})

const REMOVE_ENTRY = 'REMOVE_ENTRY'
const removeEntry = (user, name) => ({
  type: REMOVE_ENTRY,
  user,
  name
})

const REMOVE_CHAT_ENTRY = 'REMOVE_CHAT_ENTRY'
const removeChatEntry = (chat, name) => ({
  type: REMOVE_CHAT_ENTRY,
  chat,
  name
})

module.exports = {
  SET_ENTRY,
  setEntry,
  SET_CHAT_ENTRY,
  setChatEntry,
  REMOVE_ENTRY,
  removeEntry,
  REMOVE_CHAT_ENTRY,
  removeChatEntry
}
