import { registrationSaga } from "../modules/redux/sagas";
import { registration, logIn } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getAuthTokenAfterRegistration } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getAuthTokenAfterRegistration: jest.fn(() => ({ success: true })) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("regSaga", () => {
    describe("#REGISTRATION", () => {
        it("registration and authenticates through api", async () => {
            getAuthTokenAfterRegistration.mockImplementation(async () => ({ success: true, token: "token" }));
            const dispatched = await recordSaga(
                registrationSaga,
                registration("testlogin", "testpassword")
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
