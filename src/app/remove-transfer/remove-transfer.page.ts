import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-transfer',
  templateUrl: './remove-transfer.page.html',
  styleUrls: ['./remove-transfer.page.scss'],
})
export class RemoveTransferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    findReplacement() {
        this.router.navigate(['/driver-list']);
    }
}
