// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /scoops request
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/image/chocolate.jpg" },
        { name: "Vanilla", imagePath: "/image/vanilla.jpg" },
      ])
    );
  }),
];
