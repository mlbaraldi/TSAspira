export class Document {
    //falta colocar OU NUMBER no publishedat
    constructor(title, subtitle, author, publishedAt) {
        this.title = title;
        this.author = author;
        this.subtitle = subtitle;
        this.publishedAt = publishedAt;
    }
}
export default Document;
