import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent implements OnInit {
  public id: string;
  constructor(
                private router: Router,
                private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.getid();
  }
  getid() {
    this.activatedRoute.params.subscribe((params) => this.id = params['item-id']);
    console.log(this.id);
  }
}
