import express from "express";

//Controller imports
import { allItems, getItemByID } from "../../controllers/API/items.js";

const apiItemsRouter = express.Router();

apiItemsRouter.get("/items", allItems);
apiItemsRouter.get("/items/:id", getItemByID);

export default apiItemsRouter;
