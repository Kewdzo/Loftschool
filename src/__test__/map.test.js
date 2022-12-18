import Map from '../components/Map';
import mapboxgl from "mapbox-gl";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import createStore from '../store';

jest.mock("mapbox-gl");

const removeHandle = jest.fn();
const mapImplement = jest.fn(() => ({
  on: jest.fn(),
  remove: removeHandle
}))
mapboxgl.Map.mockImplementation(mapImplement);
const store = createStore();

describe("Map", () => {
  describe("#MapRender", () => {
    it("is Map renders correctly", () => {
      const { container } = render(
        <Provider store={store}>
          <Map />
        </Provider>
      );
      expect(container.getElementsByClassName("map-container").length).toBeTruthy();
    })
  });
});

