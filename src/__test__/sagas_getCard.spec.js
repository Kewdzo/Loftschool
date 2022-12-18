import { getCardSaga } from "../modules/redux/sagas";
import { getCard, cardInfoReady } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getCardInfo } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getCardInfo: jest.fn(() => ({ success: true })) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("getCardSaga", () => {
    describe("#GET_CARD", () => {
        it("get card info from api", async () => {
            getCardInfo.mockImplementation(async () => ({ success: true, cardName: "some info" }));
            const dispatched = await recordSaga(
                getCardSaga,
                getCard("token")
            );

            expect(dispatched).toEqual([
                {
                    type: cardInfoReady.toString(),
                    payload: { success: true, cardName: "some info" }
                },
            ]);
        });
    });
});
