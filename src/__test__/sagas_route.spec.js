import { getRouteSaga } from "../modules/redux/sagas";
import { getRoute, routeReady } from "../modules/redux/actions";
import { recordSaga } from "../modules/redux/recordSaga";
import { getRouteFromServer } from "../API_sagas";

jest.mock("../API_sagas", () => ({ getRouteFromServer: jest.fn(() => ([[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]])) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("routeSaga", () => {
    describe("#ROUTE", () => {
        it("get route from api", async () => {
            getRouteFromServer.mockImplementation(async () => ([[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]]));
            const dispatched = await recordSaga(
                getRouteSaga,
                getRoute("address1", "address2")
            );

            expect(dispatched).toEqual([
                {
                    type: routeReady.toString(),
                    payload: [[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]]
                },
            ]);
        });
    });
});
