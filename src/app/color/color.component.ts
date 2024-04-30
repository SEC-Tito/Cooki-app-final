import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color ',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent  implements OnInit {

    @Input() image: string ="";
    @Input() description: string="";

  
  constructor() { }

  ngOnInit() {}

}

