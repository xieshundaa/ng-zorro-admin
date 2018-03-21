import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ key: number; name: string; age: number; address: string; status: boolean; checked: boolean }> = [];
  // operating = false;
  dataSet = [];
  indeterminate = false;
  sortValue = null;
  sortKey = null;
  listOfSearchName = [];
  searchAddress: string;
  editCache = {};
  constructor(
              public router: Router
            ) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.dataSet.push({
        key: `${i + 1}`,
        name   : `Edward King ${i}`,
        age    : `${i + 1}`,
        address: `London, Park Lane no. ${i}`,
        status: true,
        checked: false
      });
    }
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          name: item.name,
          status: item.status
        };
      }
    });
  }

  currentPageDataChange($event: Array<{ key: number; name: string; age: number; address: string; status: boolean; checked: boolean; }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }
  sort(sort: {key: string, value: string}): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    console.log(sort)
    this.search();
  }
  search(): void {
    const filterFunc = item => (
      this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.dataSet.filter(item => filterFunc(item));
    if (this.sortValue) {
      this.dataSet = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortKey ] > b[ this.sortKey ] ? 1 : -1) : (b[ this.sortKey ] > a[ this.sortKey ] ? 1 : -1));
    } else {
      this.dataSet = data;
    }
  }
  edit(val) {
    const id = val.key;
    this.router.navigateByUrl('/workspace/sys/route-detail/' + id);
  }
  del(data) {
    console.log(data);
  }
  // 点击开始修改
  startEdit(key: string): void {
    // console.log(type);
    this.editCache[ key ].edit = true;
  }
  // 修改的回调函数
  editStatus(val) {
    val = !val;
    // console.log(val);
  }
  // 修改结束
  finishEdit(key: string, data): void {
    this.editCache[ key ].edit = false;
    this.dataSet.find(item => item.key === key).name = this.editCache[ key ].name;
    this.dataSet.find(item => item.key === key).status = this.editCache[ key ].status;
    console.log(key, data);
  }
  // operateData(): void {
  //   this.operating = true;
  //   setTimeout(_ => {
  //     this.dataSet.forEach(value => value.checked = false);
  //     this.refreshStatus();
  //     this.operating = false;
  //   }, 1000);
  // }

}
