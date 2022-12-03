import { postCardMiddleware } from "../modules/redux/middlewares";
import { postCard, getCard } from "../modules/redux/actions";
import { serverPostCard } from "../api";

jest.mock("../api", () => ({ serverPostCard: jest.fn(() => ({success: true})) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});


describe("cardMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#CARD_API", () => {
    describe("POST_CARD_DATA", () => {
      it("auth_token is valid", async () => {
        serverPostCard.mockImplementation(async () => ({success: true}));
        const dispatch = jest.fn();

        await postCardMiddleware({ dispatch })()(
          postCard("cardName","expiryDate","cardNumber","cvc","id")
        );
        expect(serverPostCard).toBeCalledWith("cardName","expiryDate","cardNumber","cvc","id");
        expect(dispatch).toBeCalledWith({
          type: getCard.toString(),
          payload: "id"
        });
      });
      it("auth_token is not valid", async () => {
        serverPostCard.mockImplementation(() => false);
        const dispatch = jest.fn();

        await postCardMiddleware({ dispatch })()(
          postCard("cardName","expiryDate","cardNumber","id","cvc")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
