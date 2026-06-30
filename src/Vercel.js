import { handle } from "hono/vercel";
import app from "./Hono.js";

export const config = {
    runtime: "nodejs",
    preferredRegion: "hkg"
};

export default handle(app);
