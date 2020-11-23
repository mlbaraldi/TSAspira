import Person from "./Person";

export class Document {
    title: string
    subtitle: string
    author: Person
    publishedAt: Date | number

    constructor(title: string, subtitle: string, author: Person, publishedAt: Date) {
        this.title = title
        this.author = author
        this.subtitle = subtitle
        this.publishedAt = publishedAt

    }
}

export default Document