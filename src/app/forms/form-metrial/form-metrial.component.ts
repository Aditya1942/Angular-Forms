import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-metrial',
  templateUrl: './form-metrial.component.html',
  styleUrls: ['./form-metrial.component.css'],
})
export class FormMetrialComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  onSubmit(value) {
    console.log(value);
    this.openSnackBar(value);
  }
  openSnackBar(val: any) {
    this._snackBar.open(`name: ${val?.name} password: ${val.password}`, 'ok');
  }
}
