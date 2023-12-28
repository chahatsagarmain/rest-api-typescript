import { Router } from "express";
import { getAllAuthors } from "../controllers/authorControllers";

export const authorRouter : Router = Router();

authorRouter.get("/authors" ,async (req , res , next)=> {
    try{    
        const body = await getAllAuthors();
        return res.status(200).json(body);
    }
    catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
});

authorRouter.get("/author/:id" ,(req , res ,next)  => {

});

authorRouter.post("/author/" , (req , res , next) => {

});

authorRouter.patch("/author/:id" , (req , res , next) => {

});

authorRouter.delete("/author/:id" , (req , res , next) => {

});


