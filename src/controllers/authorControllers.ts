import { PrismaClient } from "@prisma/client";
import { Author } from "../models/author_interface";

const prisma = new PrismaClient();

export async function getAllAuthors() : Promise<Author[] | null>{
    try{
        return await prisma.author.findMany();
    }
    catch(error){
        console.log(error);
        return null;
    }
}