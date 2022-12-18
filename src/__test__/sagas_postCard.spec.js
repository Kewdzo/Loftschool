import { postCardSaga } from "../modules/redux/sagas";
import { postCard, getCard } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { postCardInfo } from "../API_sagas";

jest.mock("../API_sagas", () => ({ postCardInfo: jest.fn(() => ({ success: true })) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            postCardInfo.mockImplementation(async () => ({ success: true }));
            const dispatched = await recordSaga(
                postCardSaga,
                postCard("cardName","expiryDate","cardNumber","cvc","token")
            );

            expect(dispatched).toEqual([
                {
                    type: getCard.toString(),
                    payload: "token"
                },
            ]);
        });
    });
});
