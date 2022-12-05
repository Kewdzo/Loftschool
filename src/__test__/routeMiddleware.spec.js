import { routeMiddleware } from "../modules/redux/middlewares";
import { routeReady, getRoute } from "../modules/redux/actions";
import { serverRoute } from "../api";

jest.mock("../api", () => ({ serverRoute: jest.fn(() => ({success: true})) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});


describe("routeMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#ROUTE", () => {
    describe("api ready", () => {
      it("authenticates through api", async () => {
        serverRoute.mockImplementation(async () => ({success: true}));
        const dispatch = jest.fn();

        await routeMiddleware({ dispatch })()(
          getRoute("address1", "address2")
        );
        expect(serverRoute).toBeCalledWith("address1", "address2");
        expect(dispatch).toBeCalledWith({
          type: routeReady.toString(),
          payload: ({success: true})
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
