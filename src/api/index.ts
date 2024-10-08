import { Router } from "express"
import sampleRoutes from "./routes/SampleRoute";


const routes = (): Router => {
    const app: Router = Router();

    sampleRoutes(app);

    return app;
}


export default routes;