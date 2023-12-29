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

export async function getAuthorById(id : number) : Promise<Author | null>{
    try{
        const user = await prisma.author.findUnique({
            where : {
                id : id
            }
        });

        if (user) return user;

        return null;

    }
    catch(error : any){
        console.log(error);
        return null;
    }
}

export async function createAuthor(data : any) : Promise<Author | null>{
    
    try{
        const found = await prisma.author.findFirst({
            where : {
                firstName : data.firstName,
                lastName : data.lastName 
            },
        });

        if(found) return found;
        const user = await prisma.author.create({
            data : {
                firstName : data.firstName,
                lastName : data.lastName
            }
        });

        return user;
    
    }
    catch(error : any){
        console.log(error);
        return null;
    }
}

export async function updateAuthorById(id: number, data: any): Promise<Author | null> {
    try {
      const found = await prisma.author.findUnique({
        where: {
          id: id,
        },
      });
  
      if (!found) {
        const user = await prisma.author.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        });
  
        return user;
      }
  
      const user = await prisma.author.update({
        where: {
          id: id,
        },
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
  
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
}

export async function deleteAuthorById(id : number) : Promise<Author | null>{
    try{
        const user = await prisma.author.delete({
            where : {
                id : id
            }
        });

        return user;
    }
    catch(error : any){
        console.log(error);
        return null;
    }
}