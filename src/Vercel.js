import { handle } from "hono/vercel";
import app from "./Hono.js";

export const config = {
    runtime: "edge"
};

export default handle(app);
