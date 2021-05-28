import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBootstrapComponent } from './form-bootstrap/form-bootstrap.component';
import { FormMetrialComponent } from './form-metrial/form-metrial.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormBootstrapComponent, FormMetrialComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  exports: [FormBootstrapComponent, FormMetrialComponent],
})
export class CustomFormsModule {}
