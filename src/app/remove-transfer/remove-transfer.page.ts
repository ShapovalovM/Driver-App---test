import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-remove-transfer',
  templateUrl: './remove-transfer.page.html',
  styleUrls: ['./remove-transfer.page.scss'],
})
export class RemoveTransferPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) {
  }

  ngOnInit() {
  }

  findReplacement() {
    this.router.navigate(['/driver-list']);
  }

  async openHelp() {
    const toast = await this.toastController.create({
      message: 'Help page will be implemented soon',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
