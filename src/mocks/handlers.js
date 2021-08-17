// src/mocks/handlers.js
import { rest } from "msw";

const server = "http://localhost:3030/";

export const handlers = [
  // Handles a POST /order request
  rest.post(`${server}/order`, (req, res, ctx) => {}),
  // Handles a GET /scoops request
  rest.get(`${server}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        {name: 'Chocolate', imagePath: '/image/chocolate.jpg'}
      ])
    )
  }),
  // Handles a GET /toppings request
  rest.get(`${server}/toppings`, (req, res, ctx) => {}),
];
