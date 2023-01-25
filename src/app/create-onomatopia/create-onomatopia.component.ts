import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string= "";
  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(){
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
