import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  treeForm: FormGroup;
  model:any;

  ngOnInit(): void {
    this.model  = TREE;
    this.treeForm = this.builder.group({
      treeItems: this.initTreeItems(this.model)
    });
  }

  constructor(private builder: FormBuilder) {

  }

  save(tree){
    this.model = tree;
    console.log(tree);
  }

  private initTreeItems(items): FormArray {
    const formArray = new FormArray([]);
    items.forEach(i => {
      const grp = this.builder.group({
        name: i.itemName,
        children: this.initTreeItems(i.children)
      })
      formArray.push(grp);
    });

    return formArray;
  }
}

const TREE = [
  {
    id: 1,
    itemName: 'Top Level',
    children: [{
      id: 2,
      itemName: 'Level 2',
      children: []
    }]

  },
  {
    id: 3,
    itemName: 'Another Top Level',
    children: [{
      id: 4,
      itemName: 'Another Level 2',
      children: [
        {
          id: 5,
          itemName: 'Level 3',
          children: []
        }
      ]
    }]

  }
];
