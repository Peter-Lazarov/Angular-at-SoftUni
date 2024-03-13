import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRouterLink]'
})
export class RouterLinkDirective implements OnInit {
  @Input() linkInputed: string = '';
  constructor(private elementReference: ElementRef, private renderer: Renderer2, private router: Router) { 

  }
  
  ngOnInit(): void {
    console.log(this.linkInputed);
    this.renderer.listen(this.elementReference.nativeElement, 'click', this.clickHandler.bind(this));
  }
  
  clickHandler(event: MouseEvent){
    console.log('click');

    this.router.navigate([this.linkInputed]);
    console.log(this.linkInputed);
  }
  

}
