const { Map } = require('immutable')

const actions = require('../actions')
const reducer = require('./user')

describe('user reducer', () => {
  describe('setEntry', () => {
    it('should create an entry', () => {
      const state = Map()

      const newState = reducer(
        state,
        actions.setEntry('user', 'name', 'message')
      )

      expect(newState.get('user').get('name')).toBe('message')
    })
    it('should not discard previous entries', () => {
      const state = Map({
        user: Map({ prev: 'prev' })
      })

      const newState = reducer(
        state,
        actions.setEntry('user', 'name', 'message')
      )

      expect(newState.get('user').get('prev')).toBe('prev')
      expect(newState.get('user').get('name')).toBe('message')
    })
  })
  describe('removeEntry', () => {
    it('should remove an entry', () => {
      const state = Map({
        user: Map({ prev: 'prev' })
      })

      const newState = reducer(state, actions.removeEntry('user', 'prev'))

      expect(newState.get('user').get('prev')).toBeUndefined()
    })
  })
  it('should not modify the state if the action is unknown', () => {
    const state = Map({
      user: Map({ prev: 'prev' })
    })

    const newState = reducer(state, {
      type: 'nothing'
    })

    expect(newState).toBe(state)
  })
})
