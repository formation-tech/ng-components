import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
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

@Component({
  selector: 'ft-datatable-scrud-table',
  templateUrl: './ft-datatable-scrud-table.component.html',
  styleUrls: ['./ft-datatable-scrud-table.component.css'],
  exportAs: 'ftDatatableScrudTable',
})
export class FtDatatableScrudTableComponent extends FtDatatableTableComponent implements OnInit, AfterViewChecked {
  @Input() service: Searchable<any> | any;
  @ContentChildren(FtDatatableScrudColumnDirective) contentColumnDirective: QueryList<FtDatatableScrudColumnDirective>;
  @ViewChildren(FtDatatableScrudColumnDirective) viewColumnDirective: QueryList<FtDatatableScrudColumnDirective>;
  canEdit: boolean;
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

  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {
    this.service.search().subscribe((items) => {
      this.items = items;
    });
    this.canEdit = 'update' in Object.getPrototypeOf(this.service);
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
    this.viewColumnDirective.forEach((viewColumnDirective) => {
      if (this.columns[viewColumnDirective.key].readTemplate) {
        viewColumnDirective.readTemplate = this.columns[viewColumnDirective.key].readTemplate;
      }

      if (this.columns[viewColumnDirective.key].editTemplate) {
        viewColumnDirective.editTemplate = this.columns[viewColumnDirective.key].editTemplate;
      }
    });
  }

  create() {
    this.action.type = ActionTypes.create;
    this.action.item = {};
  }

  edit(item, i) {
    this.action.type = ActionTypes.update;
    this.action.item = { ...item };
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
        this.service.create(this.action.item).subscribe((value) => this.postCreate.emit(value));
        break;
      case ActionTypes.update:
        this.service.update(this.action.item).subscribe((value) => this.postUpdate.emit(value));
        break;
      case ActionTypes.delete:
        this.service.delete(this.action.item).subscribe((value) => this.postDelete.emit(value));
        break;
    }
    this.cancel();
  }

  cancel() {
    this.action.type = null;
    this.action.index = null;
    this.action.item = null;
  }
}