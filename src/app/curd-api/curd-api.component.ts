import { Component, OnInit } from '@angular/core';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-curd-api',
  templateUrl: './curd-api.component.html',
  styleUrls: ['./curd-api.component.css'],
})
export class CurdApiComponent implements OnInit {
  todoList: object;
  constructor(private apiData: CurdService) {
    this.apiData.getData().subscribe((data) => {
      console.log(data);
      this.todoList = data;
    });
  }
  ngOnInit(): void {}
}
