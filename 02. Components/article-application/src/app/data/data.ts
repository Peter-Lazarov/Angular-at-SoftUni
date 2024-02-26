import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articleAll : Article[] = [];

        for (let i = 0; i < data.length; i++) {
            articleAll[i] = new Article(
                data[i].title, 
                data[i].description,
                data[i].author,
                data[i].imageUrl
            );
        }

        return articleAll;
    };
}