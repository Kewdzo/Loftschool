import reduxer_mixer_super_class from '../modules/redux/reducer';
import {cardInfoReady, addressListReady, routeReady} from '../modules/redux';

describe("serverAPI", () => {
  describe("#CardInfoReady", () => {
    it('returns adresses', () => {
      const previousState = { isLoggedIn: true, token: undefined }
      expect(reduxer_mixer_super_class(previousState, cardInfoReady(({"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","token":"rec4NwqbXyWY2Ju7E","cvc":"555"})))).toEqual(
        { card: ({"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","token":"rec4NwqbXyWY2Ju7E","cvc":"555"}), isLoggedIn: true, token: undefined, }
      )
    })
  })

  describe("#AddressListReady", () => {
    it('returns adresses', () => {
      const previousState = { isLoggedIn: true, token: undefined }
      expect(reduxer_mixer_super_class(previousState, addressListReady(["Пулково (LED)","Мариинский театр"]))).toEqual(
        { addresses: ["Пулково (LED)","Мариинский театр"], isLoggedIn: true, token: undefined, }
      )
    })
  })

  describe("#Route", () => {
    it('returns RouteReady true', () => {
      const previousState = { isLoggedIn: true, token: undefined }
      expect(reduxer_mixer_super_class(previousState, routeReady(true))).toEqual(
        { route: true, isLoggedIn: true, token: undefined, }
      )
    })
    it('returns RouteReady false', () => {
      const previousState = { isLoggedIn: true, token: undefined }
      expect(reduxer_mixer_super_class(previousState, routeReady(false))).toEqual(
        { route: false, isLoggedIn: true, token: undefined, }
      )
    })
  })
})