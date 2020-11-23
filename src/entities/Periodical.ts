import Document from "./Document.js";
import Person from "./Person.js";


class Periodical extends Document {
    issn: number
    volume: number
    issue: number

    constructor(issn: number, volume: number, issue: number, title: string, subtitle:string, author:Person, publishedAt:Date) {
        super(title, subtitle, author, publishedAt)
        this.issn = issn
        this.volume = volume
        this.issue = issue
    }

}


export default Periodical