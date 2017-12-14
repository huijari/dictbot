const { combineReducers } = require('redux')

const user = require('./user')
const chat = require('./chat')

const reducer = combineReducers({
  user,
  chat
})

module.exports = reducer
