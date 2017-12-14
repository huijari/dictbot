const actions = require('../actions.js')
const bot = require('../bot.js')
const handler = require('./chat.js')

describe('chat handler', () => {
  describe('/set!!', () => {
    it('should return a setChatEntry action', () => {
      const { action, command } = handler({
        chat: {
          id: 0
        },
        text: '/set!! name the message'
      })
      expect(action).toMatchObject({
        type: actions.SET_CHAT_ENTRY,
        chat: 0,
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
        text: '/set!! name'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.REPLY,
        chat: 1,
        message: 0,
        text: 'Wrong number of arguments, usage: /set!! name message'
      })
    })
  })
  describe('/remove!!', () => {
    it('should return a removeChatEntry action', () => {
      const { action, command } = handler({
        chat: {
          id: 0
        },
        text: '/remove!! name'
      })
      expect(action).toMatchObject({
        type: actions.REMOVE_CHAT_ENTRY,
        chat: 0,
        name: 'name'
      })
      expect(command).toBeUndefined()
    })
    it('should display the help text if args dont match', () => {
      const { action, command } = handler({
        id: 0,
        chat: {
          id: 1
        },
        text: '/remove!!'
      })
      expect(action).toBeUndefined()
      expect(command).toMatchObject({
        type: bot.REPLY,
        chat: 1,
        message: 0,
        text: 'Wrong number of arguments, usage: /remove!! name'
      })
    })
  })
  it('should do nothing when the message doesnt have a text', () => {
    const { action, command } = handler({})
    expect(action).toBeUndefined()
    expect(command).toBeUndefined()
  })
  it('should do nothing when the message doesnt match', () => {
    const { action, command } = handler({
      text: '/nothing'
    })
    expect(action).toBeUndefined()
    expect(command).toBeUndefined()
  })
})
