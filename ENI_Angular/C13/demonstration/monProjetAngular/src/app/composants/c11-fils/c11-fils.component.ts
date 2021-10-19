import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11-fils',
  templateUrl: './c11-fils.component.html',
  styleUrls: ['./c11-fils.component.css']
})
export class C11FilsComponent implements OnInit {

  @Input() parametre = 'Luke';

  constructor() { }

  ngOnInit(): void {
  }

}
