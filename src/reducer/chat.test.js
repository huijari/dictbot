const { Map } = require('immutable')

const actions = require('../actions')
const reducer = require('./chat')

describe('chat reducer', () => {
  describe('setChatEntry', () => {
    it('should create an entry', () => {
      const state = Map()

      const newState = reducer(
        state,
        actions.setChatEntry('chat', 'name', 'message')
      )

      expect(newState.get('chat').get('name')).toBe('message')
    })
    it('should not discard previous entries', () => {
      const state = Map({
        chat: Map({ prev: 'prev' })
      })

      const newState = reducer(
        state,
        actions.setChatEntry('chat', 'name', 'message')
      )

      expect(newState.get('chat').get('prev')).toBe('prev')
      expect(newState.get('chat').get('name')).toBe('message')
    })
  })
  describe('removeChatEntry', () => {
    it('should remove an entry', () => {
      const state = Map({
        chat: Map({ prev: 'prev' })
      })

      const newState = reducer(state, actions.removeChatEntry('chat', 'prev'))

      expect(newState.get('chat').get('prev')).toBeUndefined()
    })
  })
})

