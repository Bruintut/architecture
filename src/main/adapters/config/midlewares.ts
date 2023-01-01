import { cors } from "../../midlewares/cors";
import {Express} from "express"
import { contentType } from "../../midlewares/content-types";
import { bodyParser } from "../../midlewares/body-parser";

export const useMidlewares = (app: Express): void =>{
    app.use(bodyParser);
    app.use(cors);
    app.use(contentType);
}