export interface Author{
    id :Number;
    createdAt : Date;
    updatedAt : Date;
    firstName : String;
    lastName :String;
    Books? : Book[];
}

export interface Book{
    id : Number;
    createdAt : Date;
    updatedAt : Date;
    title : String; 
    isFiction : Boolean;
    datePublished : Date;
    authorId : Number;
  }

