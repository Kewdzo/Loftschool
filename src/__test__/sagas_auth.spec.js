import { authenticateSaga } from "../modules/redux/sagas";
import { authenticate, logIn } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getAuthToken } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getAuthToken: jest.fn(() => ({ success: true })) }));

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            getAuthToken.mockImplementation(async () => ({ success: true, token: "token" }));
            const dispatched = await recordSaga(
                authenticateSaga,
                authenticate("testlogin", "testpassword")
            );

            expect(dispatched).toEqual([
                {
                    type: logIn.toString(),
                    payload: "token"
                },
            ]);
        });
    });
});
