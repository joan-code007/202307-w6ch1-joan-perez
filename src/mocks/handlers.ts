import { rest } from "msw";
import { filmsMock } from "./filmsMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_FILMS_URL}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(filmsMock));
  }),
];

export const handlerError = [
  rest.get(`${import.meta.env.VITE_API_FILMS_URL}`, (_req, res, ctx) => {
    return res(ctx.status(404, "Films couldn't be loaded"));
  }),
];
