import { rest } from "msw";
import { apiUrl } from "../hooks/useFilmsApi";
import { filmsMock } from "./filmsMock";

export const handlers = [
  rest.get(`${apiUrl}/films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: filmsMock }));
  }),
];

export const handlerError = [
  rest.get(`${apiUrl}/films`, (_req, res, ctx) => {
    return res(ctx.status(404, "Films couldn't be loaded"));
  }),
];
