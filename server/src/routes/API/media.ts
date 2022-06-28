import express from "express";

//Controller imports
import { allMedia, getMediaByID } from "../../controllers/API/media";

const apiMediaRouter = express.Router();

apiMediaRouter.get("/media", allMedia);
apiMediaRouter.get("/media/:id", getMediaByID);

export default apiMediaRouter;
