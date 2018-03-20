import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isCollapse;
  @Output() toogleFun = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  // 按钮切换
  toggleBtn(val) {
    this.toogleFun.emit(val);
    val = !val;
  }
}
