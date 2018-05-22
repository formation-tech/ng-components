import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ft-datatable-pagination',
  templateUrl: './ft-datatable-pagination.component.html',
  styleUrls: ['./ft-datatable-pagination.component.css'],
})
export class FtDatatablePaginationComponent implements OnInit, OnChanges {
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Input() pageSize = 50;
  @Input() maxPages = 5;
  @Input() count = 0;
  pages = [];
  filteredPages = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.pages = Array(Math.ceil(this.count / this.pageSize))
      .fill(0)
      .map((v, i) => i + 1);
    this.setPage(this.page);
  }

  setPage(page) {
    this.page = page;

    if ((page - 1) * this.pageSize >= this.count) {
      const newPage = Math.ceil(this.count / this.pageSize);
      this.page = newPage > 0 ? newPage : 1;
    }

    this.pageChange.emit(this.page);

    const pageBefore = Math.floor(this.maxPages / 2);
    const pageAfter = Math.ceil(this.maxPages / 2);
    let min, max;

    if (this.page < pageAfter) {
      min = 0;
      max = this.pages.length < this.maxPages ? this.pages.length : this.maxPages;
    } else if (this.page > this.pages.length - pageBefore) {
      min = this.pages.length - this.maxPages > 0 ? this.pages.length - this.maxPages : 0;
      max = this.pages.length;
    } else {
      min = this.page - pageAfter > 0 ? this.page - pageAfter : 0;
      max = this.page + pageBefore < this.pages.length ? this.page + pageBefore : this.pages.length;
    }

    this.filteredPages = this.pages.slice(min, max);
  }
}
