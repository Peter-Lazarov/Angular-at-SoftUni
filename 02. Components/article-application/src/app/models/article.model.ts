export class Article {
    public title: string;
    public description: string;
    public author: string;
    public imageUrl: string;

    public articleDescriptionLength: number;
    public descriptionToShow: string;

    constructor(
        title: string,
        description: string,
        author: string,
        imageUrl: string
    ){
        this.title = title;
        this.description = description;
        this.author = author;
        this.imageUrl = imageUrl;

        this.articleDescriptionLength = 0;
        this.descriptionToShow = "";
    }
}
