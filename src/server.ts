import app from "./app";
import logger from "./config/logger";

// import { Config } from "./config/index.js";

const Port = 3000;
const startServer = () => {
    try {
        app.listen(Port, () => {
            // console.log(`Server is litening on: ${Port}`);
            logger.info(`Server is litening on: ${Port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
