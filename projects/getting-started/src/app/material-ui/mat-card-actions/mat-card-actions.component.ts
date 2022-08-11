import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-card-actions',
  templateUrl: './mat-card-actions.component.html',
  styleUrls: ['./mat-card-actions.component.css']
})
export class MatCardActionsComponent implements OnInit {
  @Input() align: 'start' | 'end' = 'start';

  constructor() { }

  ngOnInit(): void {
  }

}
