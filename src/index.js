const { createStore } = require('redux')
const { json } = require('micro')
const { Map } = require('immutable')

const handle = require('./handler')
const reducer = require('./reducer')

const store = createStore(reducer)
const handler = handle(store)

const app = async (req, res) => {
  const update = await json(req)
  const result = handler(update.message)
  if (result.action) store.dispatch(result.action)
  return result
}

module.exports = app
