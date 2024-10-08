import { Express } from "express"
import expressLoader from "./express"


const loaders = async(app: Express): Promise<void> => {
    expressLoader(app);
}

export default loaders;