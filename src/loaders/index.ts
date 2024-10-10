import { Express } from "express"
import expressLoader from "./express"

// Load all the necessary modules into the app
const loaders = async(app: Express): Promise<void> => {
    expressLoader(app);
}

export default loaders;
