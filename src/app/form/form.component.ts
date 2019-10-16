import { Component} from '@angular/core';

@Component({
  selector: 'f',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myName;
  myAddress;
  data = [
  ];
onInsert(name,address){
  this.myName=name;
  this.myAddress=address;
  this.data.push({'names':this.myName,'addresss':this.myAddress});

}

  onDelete(d)
  {
    let index = this.data.indexOf(d);
    this.data.splice(index,1);
  }


}
