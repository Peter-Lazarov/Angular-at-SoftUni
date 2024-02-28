import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-rx-js';

  //this is used when zone noop is set
  constructor(private cd: ChangeDetectorRef) {
    setTimeout(()=> {
      this.title = 'Change from detector';
      this.cd.detectChanges();
    }, 3000);
  }
}
