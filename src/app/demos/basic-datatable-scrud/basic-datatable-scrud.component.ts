import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ft-basic-datatable-scrud',
  templateUrl: './basic-datatable-scrud.component.html',
  styleUrls: ['./basic-datatable-scrud.component.css'],
})
export class BasicDatatableScrudComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {}
}
