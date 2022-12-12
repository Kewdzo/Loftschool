import { getAddressListSaga } from "../modules/redux/sagas";
import { getAddressList, addressListReady } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getAddreses } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getAddreses: jest.fn(() => ({ success: true })) }));

describe("addressesSaga", () => {
    describe("#ADDRESES", () => {
        it("get addreses from api", async () => {
            getAddreses.mockImplementation(async () => ({ success: true, addresses: ["address1","address2"] }));
            const dispatched = await recordSaga(
                getAddressListSaga,
                getAddressList()
            );

            expect(dispatched).toEqual([
                {
                    type: addressListReady.toString(),
                    payload: ["address1","address2"]
                },
            ]);
        });
    });
});
