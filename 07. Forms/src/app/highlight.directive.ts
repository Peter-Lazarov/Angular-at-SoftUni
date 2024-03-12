import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

//Events part 1
type voidFunctions = () => void;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {
  //Evnts with HostListener 
  @HostListener('mouseover', ['$event']) mouseOverHandler(event: MouseEvent) {
    console.log('mouseOver HostListener', event);
  }

  //Events part 2
  functionsFromEventsAll: voidFunctions[] = [];

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }

  mouseEnterHandler(event: MouseEvent): void {
    console.log('1' + event);
  }

  mouseLeaveHandler(event: MouseEvent): void {
    console.log('2' + event);
  }

  ngOnInit(): void {
    ////Renderer
    //console.log(this.elementReference);

    //this.renderer.setStyle(this.elementReference.nativeElement, 'color', 'blue');

    //this.renderer.listen(this.elementReference.nativeElement, 'mouseenter', this.mouseEnterHandler)

    //Classes set
    this.renderer.addClass(this.elementReference.nativeElement, 'highlight');
    //this.renderer.removeClass(this.elementReference.nativeElement, 'highlight');



    //Events part 3
    const mouseEnterEvent = this.renderer.listen(
      this.elementReference.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );
    console.log('mouseEnterEvent set');

    const mouseLeaveEvent = this.renderer.listen(
      this.elementReference.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );
    console.log('mouseLeaveEvent set');

    this.functionsFromEventsAll.push(mouseEnterEvent);
    this.functionsFromEventsAll.push(mouseLeaveEvent);

    
  }

  ngOnDestroy(): void {
    console.log('in on destroy');

    console.log(this.functionsFromEventsAll);

    this.functionsFromEventsAll.forEach((currentFunction) => {
      currentFunction();
    })
  }
}
