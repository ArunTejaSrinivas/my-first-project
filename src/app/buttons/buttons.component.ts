import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  clr = "blue"

listOfColors = ["red", "pink", "orange", "brown", "grey"]

createColor(){
  this.listOfColors.push(this.clr)
  console.log("hi")
}

removeColor(index: number) {
  console.log(index);
  this.listOfColors.splice(index, 1);

}
}