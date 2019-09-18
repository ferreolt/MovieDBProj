import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() pageSize: number;
  @Input() collectionSize: number;

  constructor() { }

  ngOnInit() {
  }

}
