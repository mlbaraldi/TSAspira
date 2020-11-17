import Document from "./Document";
import Person from "./Person"

class Book extends Document{
    isbn: number;
    volume: number;
    
    constructor(isbn:number, volume:number, title: string, subtitle: string, author: Person, publishedAt: Date) {
        super(title, subtitle, author, publishedAt)
        this.isbn = isbn
        this.volume = volume
        this.title = title
        this.author = author
        this.subtitle = subtitle
        this.publishedAt = publishedAt

    }
}



export default Book