import { getRouteSaga } from "../modules/redux/sagas";
import { getRoute, routeReady } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getRouteFromServer } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getRouteFromServer: jest.fn(() => ({ success: true })) }));

describe("routeSaga", () => {
    describe("#ROUTE", () => {
        it("get route from api", async () => {
            getRouteFromServer.mockImplementation(async () => ({ success: true, result: [] }));
            const dispatched = await recordSaga(
                getRouteSaga,
                getRoute("address1", "address2")
            );

            expect(dispatched).toEqual([
                {
                    type: routeReady.toString(),
                    payload: { success: true, result: [] }
                },
            ]);
        });
    });
});
