import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  result = true;

  constructor(private router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      this.result = !!+data.params.status;
    });
  }

  findReplacement() {
    this.router.navigateByUrl('/driver-list');
  }

  confirm() {
    this.router.navigateByUrl('/');
  }
}
