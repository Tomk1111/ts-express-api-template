import { Router } from "express";
import { sampleFunction } from "../controllers/SampleController";



const router: Router = Router();

const sampleRoutes = (app: Router): void => {
    app.use(router)

    // EXAMPLE ROUTE WITH QUERY PARAM VALIDATION
    // router.get("/search", celebrate({
    //     [Segments.QUERY]: {
    //         query: Joi.string().required(),
    //     }
    // }), search)

    router.get("/sample", sampleFunction)
}


export default sampleRoutes;