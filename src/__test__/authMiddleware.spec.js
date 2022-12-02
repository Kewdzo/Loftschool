import { authMiddleware } from "../modules/redux/middlewares";
import { authenticate, logIn } from "../modules/redux/actions";
import { serverLogIn } from "../api";

jest.mock("../api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks)

  describe("#AUTHENTICATE", () => {
    describe("with correct credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(async () => true);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("test@test.com", "123123")
        );
        expect(serverLogIn).toBeCalledWith("test@test.com", "123123");
        expect(dispatch).toBeCalledWith({
          type: logIn.toString(),
        });
      });
    });
    describe("with wrong credentials", () => {
      it("authenticates through api", async () => {
        serverLogIn.mockImplementation(() => false);
        const dispatch = jest.fn();

        await authMiddleware({ dispatch })()(
          authenticate("test@test.com", "123123")
        );
        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
