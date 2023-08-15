import { renderHook } from "@testing-library/react";
import { filmsMock } from "../mocks/filmsMock";
import useFilmsApi from "./useFilmsApi";

describe("Given a function 'getFilms' for ask to Api", () => {
  describe("When the function is called", () => {
    test("Then it should return list of films", async () => {
      const { result } = renderHook(() => useFilmsApi());
      const listFilms = await result.current.getFilms();

      expect(listFilms).toStrictEqual(filmsMock);
    });
  });
});
