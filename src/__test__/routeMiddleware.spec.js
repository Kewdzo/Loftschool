import { routeMiddleware } from "../modules/redux/middlewares";
import { routeReady, getRoute } from "../modules/redux/actions";
import { serverRoute } from "../api";

jest.mock("../api", () => ({ serverRoute: jest.fn(() => ([[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]])) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});


describe("routeMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#ROUTE", () => {
    describe("api ready", () => {
      it("authenticates through api", async () => {
        serverRoute.mockImplementation(async () => ([[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]]));
        const dispatch = jest.fn();

        await routeMiddleware({ dispatch })()(
          getRoute("address1", "address2")
        );
        expect(serverRoute).toBeCalledWith("address1", "address2");
        expect(dispatch).toBeCalledWith({
          type: routeReady.toString(),
          payload: [[30.272182, 59.800652], [30.274046, 59.800365], [30.275146, 59.800365]]
        });
      });
    });
    describe("api fail", () => {
      it("authenticates through api", async () => {
        serverRoute.mockImplementation(() => false);
        const dispatch = jest.fn();

        await routeMiddleware({ dispatch })()(
          getRoute("address1", "address2")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
