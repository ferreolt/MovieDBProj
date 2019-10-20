import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-bloc',
  templateUrl: './small-bloc.component.html',
  styleUrls: ['./small-bloc.component.scss']
})
export class SmallBlocComponent implements OnInit {

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
