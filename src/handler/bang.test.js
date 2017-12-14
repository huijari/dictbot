const { Map } = require('immutable')

const bot = require('../bot.js')
const handler = require('./bang.js')

const store = {
  getState: () =>
    Map({
      chat: Map({
        chat: Map({
          chat: 'in chat',
          both: 'both, in chat'
        })
      }),
      user: Map({
        user: Map({
          user: 'in user',
          both: 'both, in user'
        })
      })
    })
}

describe('bang handler', () => {
  describe('!name', () => {
    it('should do nothing when text doesnt match', () => {
      const { action, command } = handler(store)({
        from: {
          id: 'user'
        },
        chat: {
          id: 'chat'
        },
        text: '!nothing'
      })
      expect(action).toBeUndefined()
      expect(command).toBeUndefined()
    })
    it('should send the user message when match', () => {
      const { action, command } = handler(store)({
        from: {
          id: 'user'
        },
        chat: {
          id: 'chat'
        },
        text: '!user'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.SEND,
        chat: 'chat',
        text: 'in user'
      })
    })
    it('should send the chat message when match', () => {
      const { action, command } = handler(store)({
        from: {
          id: 'user'
        },
        chat: {
          id: 'chat'
        },
        text: '!chat'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.SEND,
        chat: 'chat',
        text: 'in chat'
      })
    })
    it('should send the chat message when both match', () => {
      const { action, command } = handler(store)({
        from: {
          id: 'user'
        },
        chat: {
          id: 'chat'
        },
        text: '!both'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.SEND,
        chat: 'chat',
        text: 'both, in chat'
      })
    })
  })
  it('should do nothing when the message doesnt have a text', () => {
    const { action, command } = handler({})
    expect(action).toBeUndefined()
    expect(command).toBeUndefined()
  })
})
