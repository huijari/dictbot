const { Map } = require('immutable')

const actions = require('../actions')

const setEntry = (state, { user, name, message }) =>
  state.setIn([user, name], message)

const removeEntry = (state, { user, name }) => state.deleteIn([user, name])

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case actions.SET_ENTRY:
      return setEntry(state, action)
    case actions.REMOVE_ENTRY:
      return removeEntry(state, action)
    default:
      return state
  }
}

module.exports = reducer
