const { Map } = require('immutable')

const actions = require('../actions')

const setChatEntry = (state, { chat, name, message }) =>
  state.setIn([chat, name], message)

const removeChatEntry = (state, { chat, name }) => state.deleteIn([chat, name])

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
