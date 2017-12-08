const actions = require('./actions.js')
const bot = require('./bot.js')
const handler = require('./handler.js')

describe('handler', () => {
  describe('/set!', () => {
    it('should return a setEntry action', () => {
      const { action, command } = handler({
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
      expect(command).toBeUndefined()
    })
    it('should display the help text if args dont match', () => {
      const { action, command } = handler({
        id: 0,
        chat: {
          id: 1
        },
        text: '/set! name'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.REPLY,
        chat: 1,
        message: 0,
        content: 'Wrong number of arguments, usage: /set! name message'
      })
    })
  })
})
