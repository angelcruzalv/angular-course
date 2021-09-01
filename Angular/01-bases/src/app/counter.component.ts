import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
         
  <h1>{{title}}</h1>
  <h2>Base number is: {{base}}</h2>
  <!-- <button (click)="num = num-1">- 1 </button>
  <span> {{ num }} </span>
  <button (click) = "num = num+1;">+ 1</button> -->

  <!-- <button (click) = "min();"> -1 </button>
  <span>{{num}}</span>
  <button (click) = "plus();"> +1 </button> -->

  <button (click) = "value(-base);">- {{base}} </button>
  <span>{{num}}</span>
  <button (click) = "value(+base);">+ {{base}} </button>
    `
})
export class CounterComponent{
    title: string = 'Couter App';
  num: number = 0;
  base: number = 15;

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