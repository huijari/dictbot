const { Map } = require('immutable')

const actions = require('../actions')

const setChatEntry = (state, { chat, name, message }) => {
  const entries = state.get(chat) || Map()
  return state.set(chat, entries.set(name, message))
}

const removeChatEntry = (state, { chat, name }) => {
  const entries = state.get(chat)
  if (entries) return state.set(chat, entries.delete(name))
  return state
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_CHAT_ENTRY:
      return setChatEntry(state, action)
    case actions.REMOVE_CHAT_ENTRY:
      return removeChatEntry(state, action)
    default:
      return state
  }
}

module.exports = reducer

