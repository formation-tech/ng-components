import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.css'],
})
export class CustomDatatableComponent implements OnInit {
  companies = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('/assets/crunchbase-extract.json').subscribe((data: any) => {
      this.companies = data;
    });
  }
}
