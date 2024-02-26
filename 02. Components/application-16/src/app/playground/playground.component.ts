import { Component, DoCheck, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy, DoCheck{
  @Input('color') colorValue = "white";
  @Output() onTestOutput = new EventEmitter<string>();

  imgUrl = 'https://xubuntu.org/wp-content/themes/xubuntu-website/xubuntu-eighteen/images/xubuntu-logo-45.png';
  playGroundClass = 'playGround'
  isClicked = true;
  
  showClick(event: Event){
    console.log(this.isClicked);
    
    this.isClicked = !this.isClicked;
  }

  inputHandle(givenValue: string){
    console.log(givenValue);
    console.log(this.colorValue);

    this.onTestOutput.emit(givenValue);
  }

  ngOnInit(){
    //debugger
    console.log("On init");
  }

  ngAfterViewInit(){
    //debugger
    console.log('After Init');
  }

  ngOnDestroy(){
    //debugger
    console.log('On Destroy');
  }

  ngDoCheck(){
    console.log('Do check');
  }

}
