import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-metrial',
  templateUrl: './form-metrial.component.html',
  styleUrls: ['./form-metrial.component.css'],
})
export class FormMetrialComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
  get email() {
    return this.loginForm.get('email');
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.loginForm.value);

    this.openSnackBar(this.loginForm.value);
  }
  openSnackBar(val: any) {
    this._snackBar.open(`name: ${val?.email} password: ${val.password}`, 'ok');
  }
}
