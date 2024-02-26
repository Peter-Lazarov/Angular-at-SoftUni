import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation',
    template: `<h1>This is navigation component h1</h1>
                <p>{{pElementContent}}</p>`,
    styles: ['h1{color: blue}']
})
export class NavigationComponent {
    pElementContent = 'this is p element content from class with variable'
}
