const actions = require('./actions.js')
const handler = require('./handler.js')

describe('handler', () => {
  describe('/set!', () => {
    it('should return a setEntry action', () => {
      const { action, bot } = handler({
        from: {
          id: 0
        },
        text: '/set! name the message'
      })
      expect(action).toMatchObject({
        type: actions.SET_ENTRY,
        user: 0,
        name: 'name',
        message: 'the message'
      })
      expect(bot).toBeUndefined()
    })
  })
})
