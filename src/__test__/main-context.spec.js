import React from "react";
import { MainContextProvider, MainContext } from "../context/main-context";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("MainContext", () => {
  describe("#logIn", () => {
    it("sets 'isAuthorized' to true", () => {
      let isAuthorized;
      let logIn;

      render(
        <MainContextProvider>
          <MainContext.Consumer>
            {(value) => {
              isAuthorized = value.isAuthorized;
              logIn = value.logIn;
              return null;
            }}
          </MainContext.Consumer>
        </MainContextProvider>
      );

      expect(isAuthorized).toBe(false);
      act(() => {
        logIn("valid@email.com", "correctpassword");
      })
      expect(isAuthorized).toBe(true);
    });
  });

  describe("#logOut", () => {
    it("sets 'isAuthorized' to false", () => {
      let isAuthorized;
      let logOut;
      let logIn;

      render(
        <MainContextProvider>
          <MainContext.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isAuthorized = value.isAuthorized;
              return null;
            }}
          </MainContext.Consumer>
        </MainContextProvider>
      );

      act(() => {
        logIn("valid@email.com", "correctpassword");
        logOut();
      });

      expect(isAuthorized).toBe(false);
    });
  });
});
