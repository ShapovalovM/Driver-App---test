import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.page.html',
  styleUrls: ['./driver-list.page.scss'],
})
export class DriverListPage implements OnInit {
  @ViewChild('searchbar') searchbar;

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchbar.setFocus();
  }

  goToResultPage(result: boolean) {
    this.router.navigate(['/results']);
  }
}
