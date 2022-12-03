import authenticate from '../modules/redux/'
import {logIn, logOut} from '../modules/redux'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true', () => {
      expect(authenticate({}, logIn())).toEqual({isLoggedIn: true, token: undefined})
    })
  })

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false', () => {
      expect(authenticate({}, logOut())).toEqual({isLoggedIn: false, token: ''})
    })
  })
})