import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'ft-custom-datatable-scrud',
  templateUrl: './custom-datatable-scrud-table-only.component.html',
  styleUrls: ['./custom-datatable-scrud-table-only.component.css'],
})
export class CustomDatatableScrudTableOnlyComponent implements OnInit {
  constructor(public commentService: CommentService) {}

  ngOnInit() {}
}
