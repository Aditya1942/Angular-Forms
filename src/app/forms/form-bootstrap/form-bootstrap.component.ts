import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-form-bootstrap',
  templateUrl: './form-bootstrap.component.html',
  styleUrls: ['./form-bootstrap.component.css'],
})
export class FormBootstrapComponent implements OnInit {
  constructor(private apiData: ApiService) {}

  ngOnInit(): void {
    console.log(this.apiData.getData());
  }
  submit(value) {
    console.log(value);
    alert(`name: ${value.name} password: ${value.password} `);
  }
}
