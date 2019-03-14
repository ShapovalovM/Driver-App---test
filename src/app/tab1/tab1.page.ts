import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    segment = 'transfer';

    constructor(public actionSheetController: ActionSheetController, private router: Router) {}

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select a reason',
            buttons: [{
                text: 'Important personal transfer',
                handler: () => {
                    console.log('Personal transfer');
                    this.router.navigate(['/remove-transfer']);
                }
            }, {
                text: 'Conflict with other Welcome',
                handler: () => {
                    console.log('Conflict');
                    this.router.navigate(['/remove-transfer']);
                }
            }, {
                text: 'Problem with the car',
                handler: () => {
                    console.log('Car problem');
                    this.router.navigate(['/remove-transfer']);
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
