import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { objectContains } from '../search';

@Component({
  selector: 'ft-datatable-filters',
  templateUrl: './ft-datatable-filters.component.html',
  styleUrls: ['./ft-datatable-filters.component.css'],
})
export class FtDatatableFiltersComponent implements OnChanges, AfterContentChecked {
  @Input() items = [];
  @Input() keys = [];
  @Input() titles = {};
  @Output() filtersChange = new EventEmitter<any[] | void>();
  @ViewChild('dropdownToggle') dropdownToggle: ElementRef;

  globalSearch = '';

  filteredItems = [];
  open = false;
  filters: { key: string; needle: string }[] = [];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    if (this.open && !this.dropdownToggle.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filteredItems = [...this.items];
  }

  applyFilters() {
    this.filteredItems = [...this.items];

    // Finds in all keys
    if (this.globalSearch) {
      this.filteredItems = this.items.filter((value) => objectContains(value, this.globalSearch, this.keys));
    }

    for (const filter of this.filters) {
      this.filteredItems = this.filteredItems.filter((item) => objectContains(item, filter.needle, [filter.key]));
    }

    this.filtersChange.emit(this.filteredItems);
  }

  searchTerm(globalSearch: string) {
    this.globalSearch = globalSearch.trim();
    this.applyFilters();
  }

  ngAfterContentChecked() {
    if (this.items && this.items.length && !this.keys.length) {
      this.keys = Object.keys(this.items[0]);
      this.keys.forEach((key) => {
        this.titles[key] = key;
      });

      return;
    }
  }

  addFilter(key, needle = '') {
    this.filters.push({ key, needle });
  }

  editFilter(key, needle) {
    const filter = this.filters.find((f) => f.key === key);
    filter.needle = needle;
    this.applyFilters();
  }

  removeFilter(key) {
    const index = this.filters.findIndex((f) => f.key === key);
    this.filters.splice(index, 1);
    this.applyFilters();
  }
}
