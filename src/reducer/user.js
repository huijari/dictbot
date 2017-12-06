const { Map } = require('immutable')

const actions = require('../actions')

const setEntry = (state, { user, name, message }) => {
  const entries = state.get(user) || Map()
  return state.set(user, entries.set(name, message))
}

const removeEntry = (state, { user, name }) => {
  const entries = state.get(user)
  if (entries) return state.set(user, entries.delete(name))
  return state
}

const reducer = (state, action) => {
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
