import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'librimem-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  showRow2 = false
  constructor() { }

  ngOnInit(): void { }

  toggleShowRow2() {
    console.log("hovered")
    this.showRow2 = !this.showRow2;
  }

  openRow2() {

  }

  closeRow2() {

  }
}
