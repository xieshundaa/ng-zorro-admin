import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  @Input() isCollapse;
  constructor() { }

  ngOnInit() {
  }

}
