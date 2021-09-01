import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
   
})
export class AppComponent {
  title: string = 'Couter App';
  num: number = 0;

  // plus(){
  //   this.num += 1;
  // }
  // min(){
  //   this.num -= 1;
  // }

  value(val:number){
    this.num += val;
  }
}

