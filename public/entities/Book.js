import Document from "./Document";
class Book extends Document {
    constructor(isbn, edition, volume, title, subtitle, author, publishedAt) {
        super(title, subtitle, author, publishedAt);
        this.isbn = isbn;
        this.edition = edition;
        this.volume = volume;
    }
}
export default Book;
