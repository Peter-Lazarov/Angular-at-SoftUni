import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @ViewChild('itemForm') currentForm: NgForm | undefined;

  itemFormSubmit() {
    if (!this.currentForm) {
      return;
    }
    
    const form = this.currentForm;
    
    if(form?.invalid){
      console.log('Form is invalid');
      return;
    }
    
    console.log(form.value);
    
    //const { email, password } = form?.value;
    
    form.setValue({ itemName: '', itemDescription: '' });
  }
}
