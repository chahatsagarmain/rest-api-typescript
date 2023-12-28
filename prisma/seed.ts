import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase(){
    try{
        const author1 = await prisma.author.create({
            data: {
              firstName: 'John',
              lastName: 'Doe',
              Books: {
                create: [
                  { title: 'Book1', isFiction: true, datePublished: new Date() },
                  { title: 'Book2', isFiction: false, datePublished: new Date() },
                ],
              },
            },
          });
        
          const author2 = await prisma.author.create({
            data: {
              firstName: 'Jane',
              lastName: 'Smith',
              Books: {
                create: [
                  { title: 'Book3', isFiction: true, datePublished: new Date() },
                  { title: 'Book4', isFiction: false, datePublished: new Date() },
                ],
              },
            },
          });
    }
    catch(error){

    }
}

seedDatabase().then( async () =>{
    console.log("Seeded successfully");
    await prisma.$disconnect();
}
).catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
});