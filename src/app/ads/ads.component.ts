import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  show=false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
