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

  recentDriverList: any = [];
  possibleDriverList: any = [];

  constructor(private router: Router, public driverSrv: DriverService) {}

  initData() {
    const driverList = this.driverSrv.getDrivers();

    this.recentDriverList = driverList.filter((el) => el.recent);
    this.possibleDriverList = driverList.filter((el) => !el.recent);
  }

  ngOnInit() {
    this.searchbar.setFocus();
    this.initData();
  }

  goToResultPage(result: boolean) {
    this.router.navigate(['/results', {status: result}]);
  }

  search(data: any) {
    this.initData();

    const searchStr = data.target.value;

    if (searchStr && searchStr.trim() !== '') {
      this.recentDriverList = this.recentDriverList.filter((item) => {
        return (item.fullName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1);
      });
      this.possibleDriverList = this.possibleDriverList.filter((item) => {
        return (item.fullName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1);
      });
    }
  }
}
