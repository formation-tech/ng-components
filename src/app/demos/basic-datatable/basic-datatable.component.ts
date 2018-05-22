import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-basic-datatable',
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css'],
})
export class BasicDatatableComponent implements OnInit {
  companies = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('/assets/crunchbase-extract.json').subscribe((data: any) => {
      this.companies = data;
    });
  }
}
