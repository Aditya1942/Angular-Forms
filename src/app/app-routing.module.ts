import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdApiComponent } from './curd-api/curd-api.component';
import { FormBootstrapComponent } from './forms/form-bootstrap/form-bootstrap.component';
import { FormMetrialComponent } from './forms/form-metrial/form-metrial.component';

const routes: Routes = [
  { path: '', component: FormBootstrapComponent },
  { path: 'get', component: CurdApiComponent },
  { path: 'bootstrap', component: FormBootstrapComponent },
  { path: 'material', component: FormMetrialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
