const { json } = require('micro')
const { Map } = require('immutable')

const handle = require('./handler')

const state = Map({
  user: Map({
    3: Map({
      name: 'message'
    })
  }),
  chat: Map()
})

const app = async (req, res) => {
  const update = await json(req)
  return handle({
    getState: () => state
  })(update.message)
}

module.exports = app
