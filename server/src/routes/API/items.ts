import express from "express";

//Controller imports
import { allItems } from "../../controllers/API/items.js";

const apiItemsRouter = express.Router();

apiItemsRouter.get("/items", allItems);

export default apiItemsRouter;
