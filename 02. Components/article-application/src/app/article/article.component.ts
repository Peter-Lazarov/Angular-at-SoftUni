import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input('article') article: Article = new Article('','','','');
  @Input('articleDescription') articleDescription: string = '';
  descriptionToShow: string = '';
  articleDescriptionLength: number = 0;
  showReadMoreButton: boolean = true;
  showHideButton: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image"

  readMore(): void{
    this.articleDescriptionLength += this.symbols;
    if (this.articleDescriptionLength >= this.articleDescription.length) {
      this.showReadMoreButton = false;
      this.showHideButton = true;
      this.descriptionToShow = this.articleDescription;
    }else{
      this.showReadMoreButton = true;
      this.showHideButton = false;
      this.descriptionToShow = this.articleDescription.substring(0, this.articleDescriptionLength);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle == "Show Image" ? "Hide Image" : "Show Image";
  }

  hideDescription(): void {
    this.descriptionToShow = "";
    this.articleDescriptionLength = 0;
    this.showHideButton = false;
    this.showReadMoreButton = true;
  }
}
