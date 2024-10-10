import { Router } from "express";
import { sampleFunction } from "../controllers/SampleController";
// import { celebrate, Joi, Segments } from "celebrate"; // Uncomment for validation

const router: Router = Router();

const sampleRoutes = (app: Router): void => {
    app.use(router)

    /**
      * Route example with validation (uncomment when Joi is set up)
      * Example usage: Validate query parameters using Joi schema
      */
    // router.get("/search", celebrate({
    //     [Segments.QUERY]: {
    //         query: Joi.string().required(),
    //     }
    // }), search);

    // Sample route - handles GET request to /sample
    router.get("/sample", sampleFunction);
}
export default sampleRoutes;