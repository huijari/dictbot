const { createStore } = require('redux')
const { fetch } = require('node-fetch')
const { json } = require('micro')
const { Map } = require('immutable')

const handle = require('./handler')
const reducer = require('./reducer')
const { dispatch } = require('./bot')

const store = createStore(reducer)
const handler = handle(store)
const dispatchCommand = dispatch({
  fetch,
  token: process.ENV['BOT_TOKEN']
})

const app = async (req, res) => {
  const update = await json(req)
  const result = handler(update.message)
  if (result.action) store.dispatch(result.action)
  if (result.command) dispatchCommand(result.command)
  return result
}

module.exports = app
