import { getCardMiddleware, postCardMiddleware } from "../modules/redux/middlewares";
import { cardInfoReady, postCard, getCard } from "../modules/redux/actions";
import { serverGetCard, serverPostCard } from "../api";

jest.mock("../api", () => ({ serverGetCard: jest.fn(() => ({"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","token":"rec4NwqbXyWY2Ju7E","cvc":"555"})) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});


describe("cardMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#CARD_API", () => {
    describe("GET_CARD_DATA", () => {
      it("auth_token is valid", async () => {
        serverGetCard.mockImplementation(async () => ({"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","token":"rec4NwqbXyWY2Ju7E","cvc":"555"}));
        const dispatch = jest.fn();

        await getCardMiddleware({ dispatch })()(
          getCard("rec4NwqbXyWY2Ju7E")
        );
        expect(serverGetCard).toBeCalledWith("rec4NwqbXyWY2Ju7E");
        expect(dispatch).toBeCalledWith({
          type: cardInfoReady.toString(),
          payload: ({"cardName":"name","expiryDate":"01/24","cardNumber":"0000000000001111","token":"rec4NwqbXyWY2Ju7E","cvc":"555"})
        });
      });
      it("auth_token is not valid", async () => {
        serverGetCard.mockImplementation(async () => true);
        const dispatch = jest.fn();

        await getCardMiddleware({ dispatch })()(
          getCard("rec4NwqbXyWY2Ju7E")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
