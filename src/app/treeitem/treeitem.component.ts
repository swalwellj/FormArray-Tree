import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-treeitem',
  templateUrl: './treeitem.component.html',
  styleUrls: ['./treeitem.component.css']
})
export class TreeitemComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() depth: number;
  constructor() { }

  ngOnInit() {
  }

}
