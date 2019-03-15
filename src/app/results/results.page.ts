import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  result = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  findReplacement() {
    this.router.navigate(['/driver-list']);
  }

  confirm() {
    this.router.navigateByUrl('/');
  }
}
