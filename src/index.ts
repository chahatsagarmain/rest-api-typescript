import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {authorRouter} from "./routes/authorRoutes";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/",authorRouter);

app.get("/" , (req , res , next) => {
    res.send("Hello");
});

app.listen(process.env.PORT , () => {
    console.log(`listening on port ${process.env.PORT}`)
})

