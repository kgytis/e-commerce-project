import "dotenv/config";
import express from "express";
import cors from "cors";

// Routes imports
import apiItemsRouter from "./routes/API/items";
import apiTypesRouter from "./routes/API/types";
import apiMediaRouter from "./routes/API/media";

const app = express();
const port = process.env.PORT;

console.log(process.env.DBPORT);

// Cors setup
const corsOptions = {
  origin: `http://localhost:${port}`,
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes usage
app.use("/api", apiItemsRouter);
app.use("/api", apiTypesRouter);
app.use("/api", apiMediaRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT http://localhost:${port}`);
});
