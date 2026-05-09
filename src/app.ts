import express, {
    type NextFunction,
    type Request,
    type Response,
} from "express";
import type { HttpError } from "http-errors";
import logger from "./config/logger";

const app = express();

app.get("/", async (req, res) => {
    res.send("Welcome to auth service");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    const errorStatusCode = err.statusCode || 500;
    res.status(errorStatusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                location: "",
                path: "",
            },
        ],
    });
});

export default app;
