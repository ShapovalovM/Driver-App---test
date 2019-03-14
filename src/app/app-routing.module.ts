import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'remove-transfer', loadChildren: './remove-transfer/remove-transfer.module#RemoveTransferPageModule' },
  { path: 'driver-list', loadChildren: './driver-list/driver-list.module#DriverListPageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
