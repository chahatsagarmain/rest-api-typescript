import { Router } from "express";
import { createAuthor, deleteAuthorById, getAllAuthors, getAuthorById , updateAuthorById} from "../controllers/authorControllers";
import { Request, Response, NextFunction } from "express";
import { Author } from "@prisma/client";

export const authorRouter: Router = Router();

authorRouter.get("/authors", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = await getAllAuthors();
        if (body) {
            return res.status(200).json(body);
        }
        return res.status(200).json({ message: "No authors are present" });
    }
    catch (error: any) {
        console.log(error);
        return res.status(500).json(error);
    }
});

authorRouter.get("/author/:id", async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id: any = req.params.id;

        const user = await getAuthorById(Number.parseInt(id));

        if (user) return res.status(200).json(user);

        return res.status(404).json("No user found with id");
    }
    catch (error: any) {
        console.log(error);
        return res.status(500).json({"message" : "Internal server error"})
    }

});

authorRouter.post("/author/", async (req : Request, res :Response, next : NextFunction) => {
    try{
        const data = req.body;
    if(!data.firstName || !data.lastName) return res.status(400).json("Missing fields");

    const user = await createAuthor(data);

    if(user) return res.status(200).json({message : "Author created" , user});

    return res.status(400).json({message : "couldnt create author"});
    }
    catch(error : any){
        console.log(error);
        return res.status(500).json({message : "INTERNAL SERVER ERROR"});
    }

});

authorRouter.patch("/author/:id",async (req, res, next) => {
    try{
        const id : number = parseInt(req.params.id);
    const data : any = req.body;

    const user  = await updateAuthorById(id,data);

    return res.status(200).json({message : "User updated",user} )
    }
    catch(error : any){
        console.log(error);
        return res.status(500).json({message : "INTERNAL SERVER ERROR"});
    }
});

authorRouter.delete("/author/:id", async (req, res, next) => {
    try{
        const id : number = parseInt(req.params.id);
        const user = await deleteAuthorById(id);    
        
        return res.status(200).json({"message" : "user deleted",user});
    }
    catch(error : any){
        console.log(error);
        return res.status(500).json({message : "INTERNAL SERVER ERROR"});
    }
});


