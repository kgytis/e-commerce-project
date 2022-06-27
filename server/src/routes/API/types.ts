import express from "express";

//Controller imports
import { allTypes, getTypeByID } from "../../controllers/API/types.js";

const apiTypesRouter = express.Router();

apiTypesRouter.get("/types", allTypes);
apiTypesRouter.get("/types/:id", getTypeByID);

export default apiTypesRouter;
