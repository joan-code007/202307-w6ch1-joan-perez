import { renderHook } from "@testing-library/react";
import { filmsMock } from "../mocks/filmsMock";
import useFilmsApi from "./useFilmsApi";

describe("Given a useFilmsApi custom hook", () => {
  describe("When the getFilms function is called", () => {
    test("Then it should return list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());
      const listFilms = await result.current.getFilms();

      expect(listFilms).toStrictEqual({ results: filmsMock });
    });
  });
});
