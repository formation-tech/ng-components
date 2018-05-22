import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ft-basic-datatable-scrud',
  templateUrl: './basic-datatable-scrud-table-only.component.html',
  styleUrls: ['./basic-datatable-scrud-table-only.component.css'],
})
export class BasicDatatableScrudTableOnlyComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {}
}
