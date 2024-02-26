import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application-16';

  onOutputFromChild(inputHandle: string){
    console.log(`onOutputFromChild ${inputHandle}`);
  }
}
