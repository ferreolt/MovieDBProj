import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  constructor() { }

  @Input() title: string;
  @Input() image: string;
  @Input() imageSize: number;
  @Input() note: number;
  @Input() index: number;
  @Input() id: number;
  @Input() review: string;

  ngOnInit() {
  }

}
