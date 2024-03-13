import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @ViewChild('itemForm') itemForm: NgForm | undefined;

  itemFormSubmit() {
    if (!this.itemForm) {
      return;
    }
    
    const form = this.itemForm;
    console.log(form);

    
    const { email, password } = form?.value;
    
    form.setValue({ email: '', password: '' });
  }
}
