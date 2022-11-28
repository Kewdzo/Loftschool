import Map from '../components/Map';
import mapboxgl from "mapbox-gl";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";

jest.mock("mapbox-gl");

const removeHandle = jest.fn();
const mapImplement = jest.fn(() => ({
  on: jest.fn(),
  remove: removeHandle
}))
mapboxgl.Map.mockImplementation(mapImplement);

describe("Map", () => {
  describe("#MapRender", () => {
    it("is Map renders correctly", () => {
      const { container } = render(<Map />);
      expect(container.getElementsByClassName("map-container").length).toBeTruthy();
    })
  });
});

