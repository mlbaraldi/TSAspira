import Document from "./Document";
class Book extends Document {
    constructor(isbn, volume, title, subtitle, author, publishedAt) {
        super(title, subtitle, author, publishedAt);
        this.isbn = isbn;
        this.volume = volume;
        this.title = title;
        this.author = author;
        this.subtitle = subtitle;
        this.publishedAt = publishedAt;
    }
}
export default Book;
