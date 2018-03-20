import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  togleFun(val: boolean) {
    this.isCollapsed = !val;
  }
}
