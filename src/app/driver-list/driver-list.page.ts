import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../providers/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.page.html',
  styleUrls: ['./driver-list.page.scss'],
})
export class DriverListPage implements OnInit {
  @ViewChild('searchbar') searchbar;

  driverList: any = [];

  recentDriverList: any = [];
  possibleDriverList: any = [];

  constructor(private router: Router, public driverSrv: DriverService) {}

  initData() {
    this.driverList = this.driverSrv.getDrivers();

    this.recentDriverList = this.driverList.filter((el) => el.recent);
    this.possibleDriverList = this.driverList.filter((el) => !el.recent);
  }

  ngOnInit() {
    this.searchbar.setFocus();
    this.initData();
  }

  goToResultPage(result: boolean) {
    this.router.navigate(['/results', {status: result}]);
  }

  search(data: any) {
    const searchStr = data.target.value;

    this.recentDriverList = this.driverList.filter((item) => {
      return (item.fullName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 && item.recent);
    });
    this.possibleDriverList = this.driverList.filter((item) => {
      return (item.fullName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 && !item.recent);
    });
  }
}
