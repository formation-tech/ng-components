import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter, HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FtDatatableTableComponent } from '../../ft-datatable/ft-datatable-table/ft-datatable-table.component';
import { FtDatatableScrudColumnDirective } from '../ft-datatable-scrud-column/ft-datatable-scrud-column.directive';
import { Searchable } from '../interfaces/searchable';
import { ActionTypes } from './action-types.enum';
import { log } from 'util';

@Component({
  selector: 'ft-datatable-scrud-table',
  templateUrl: './ft-datatable-scrud-table.component.html',
  styleUrls: ['./ft-datatable-scrud-table.component.scss'],
  exportAs: 'ftDatatableScrudTable',
  preserveWhitespaces: true,
})
export class FtDatatableScrudTableComponent extends FtDatatableTableComponent implements OnInit, AfterViewChecked {
  @Input() service: Searchable<any> | any;
  @ContentChildren(FtDatatableScrudColumnDirective) contentColumnDirective: QueryList<FtDatatableScrudColumnDirective>;
  @ViewChildren(FtDatatableScrudColumnDirective) viewColumnDirective: QueryList<FtDatatableScrudColumnDirective>;
  canCreate: boolean;
  canUpdate: boolean;
  canDelete: boolean;

  @Output() postCreate = new EventEmitter<any>();
  @Output() postUpdate = new EventEmitter<any>();
  @Output() postDelete = new EventEmitter<any>();


  ActionTypes = ActionTypes;

  action = {
    type: undefined,
    item: undefined,
    index: undefined,
  };

  @HostListener('document:keyup', ['$event'])
  onDocumentKeyup(event: any): void {
    if (this.action.type) {
      switch (event.keyCode) {
        case 13: // ENTER
          this.confirm();
          break;
        case 27: // CANCEL
          this.cancel();
          break;
      }
    }
  }

  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {
    this.service.search().subscribe((items) => {
      this.items = items;
    });
    this.canCreate = 'create' in Object.getPrototypeOf(this.service);
    this.canUpdate = 'update' in Object.getPrototypeOf(this.service);
    this.canDelete = 'delete' in Object.getPrototypeOf(this.service);
  }

  ngAfterContentChecked() {
    super.ngAfterContentChecked();
    this.contentColumnDirective.forEach((columnScrudDirective) => {
      this.columns[columnScrudDirective.key].readTemplate = columnScrudDirective.readTemplate;
      this.columns[columnScrudDirective.key].editTemplate = columnScrudDirective.editTemplate;
    });
  }

  ngAfterViewChecked() {
    this.viewColumnDirective.forEach((vcd) => {
      if (this.columns[vcd.key] && this.columns[vcd.key].readTemplate) {
        vcd.readTemplate = this.columns[vcd.key].readTemplate;
      }

      if (this.columns[vcd.key] && this.columns[vcd.key].editTemplate) {
        vcd.editTemplate = this.columns[vcd.key].editTemplate;
      }
    });
  }

  create() {
    this.action.type = ActionTypes.create;
    this.action.item = {};
    this.action.index = null;
  }

  edit(item, i) {
    this.action.type = ActionTypes.update;
    this.action.item = {...item};
    this.action.index = i;
  }

  delete(item, i) {
    this.action.type = ActionTypes.delete;
    this.action.item = item;
    this.action.index = i;
  }

  confirm() {
    switch (this.action.type) {
      case ActionTypes.create:
        this.service.create(this.action.item).subscribe((value) => {
          this.items.push(value);
          this.refresh();
          this.postCreate.emit(value);
          this.cancel();
        });
        break;
      case ActionTypes.update:
        this.service.update(this.action.item).subscribe((value) => {
          this.items[this.action.index] = value;
          this.refresh();
          this.postUpdate.emit(value);
          this.cancel();
        });
        break;
      case ActionTypes.delete:
        this.service.delete(this.action.item).subscribe((value) => {
          this.items.splice(this.action.index, 1);
          this.refresh();
          this.cancel();
          this.postDelete.emit(value);
        });
        break;
    }
  }

  cancel() {
    this.action.type = null;
    this.action.index = null;
    this.action.item = null;
  }
}
