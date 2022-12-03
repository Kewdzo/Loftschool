import { addressListMiddleware } from "../modules/redux/middlewares";
import { getAddressList, addressListReady } from "../modules/redux/actions";
import { serverAddress } from "../api";

jest.mock("../api", () => ({ serverAddress: jest.fn(() => ({"addresses":["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]})) }));
jest.spyOn(window, 'alert').mockImplementation(() => { });


describe("addressListMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#ADDRESS_LIST", () => {
    describe("is ready", () => {
      it("authenticates through api", async () => {
        serverAddress.mockImplementation(async () => ({"addresses":["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]}));
        const dispatch = jest.fn();

        await addressListMiddleware({ dispatch })()(
          getAddressList()
        );
        expect(serverAddress).toBeCalledWith();
        expect(dispatch).toBeCalledWith({
          type: addressListReady.toString(),
          payload: ["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]
        });
      });
    });
    describe("fail", () => {
      it("authenticates through api", async () => {
        serverAddress.mockImplementation(() => false);
        const dispatch = jest.fn();

        await addressListMiddleware({ dispatch })()(
          getAddressList()
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
