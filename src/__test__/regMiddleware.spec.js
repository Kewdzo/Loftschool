import { regMiddleware } from "../modules/redux/middlewares";
import { registration, logIn } from "../modules/redux/actions";
import { serverRegistration } from "../api";

jest.mock("../api", () => ({ serverRegistration: jest.fn(() => ({success: true})) }));
jest.spyOn(window, 'alert').mockImplementation(() => {});


describe("regMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#REGISTRATION", () => {
    describe("with correct credentials", () => {
      it("authenticates through api", async () => {
        serverRegistration.mockImplementation(async () => ({success: true}));
        const dispatch = jest.fn();

        await regMiddleware({ dispatch })()(
          registration("test@test.com", "123123", 'NAME')
        );
        expect(serverRegistration).toBeCalledWith("test@test.com", "123123", 'NAME');
        expect(dispatch).toBeCalledWith({
          type: logIn.toString(),
        });
      });
    });
    describe("with wrong credentials", () => {
      it("authenticates through api", async () => {
        serverRegistration.mockImplementation(() => false);
        const dispatch = jest.fn();

        await regMiddleware({ dispatch })()(
          registration("test@test.com", "123123")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
