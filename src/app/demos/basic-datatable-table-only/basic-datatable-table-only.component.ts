import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-basic-datatable-table-only',
  templateUrl: './basic-datatable-table-only.component.html',
  styleUrls: ['./basic-datatable-table-only.component.css'],
})
export class BasicDatatableTableOnlyComponent implements OnInit {
  companies = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('/assets/crunchbase-extract.json').subscribe((data: any) => {
      this.companies = data;
    });
  }
}
