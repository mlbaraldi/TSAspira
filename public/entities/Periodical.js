import Document from "./Document";
class Periodical extends Document {
    constructor(issn, volume, issue, title, subtitle, author, publishedAt) {
        super(title, subtitle, author, publishedAt);
        this.issn = issn;
        this.volume = volume;
        this.issue = issue;
    }
}
export default Periodical;
