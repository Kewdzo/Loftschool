import React from "react";
import { MainContextProvider, MainContext } from "../context/main-context";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("MainContext", () => {
  describe("#logIn", () => {
    it("sets 'isLoggedIn' to true", () => {
      let isLoggedIn;
      let logIn;

      render(
        <MainContextProvider>
          <MainContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </MainContext.Consumer>
        </MainContextProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn("valid@email.com", "correctpassword");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("#logOut", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logOut;
      let logIn;

      render(
        <MainContextProvider>
          <MainContext.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </MainContext.Consumer>
        </MainContextProvider>
      );

      act(() => {
        logIn("valid@email.com", "correctpassword");
        logOut();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});
