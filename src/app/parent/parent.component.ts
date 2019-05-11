import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

    books: any [] = [
        {
            author: 'Dr. Seuss',
            title: 'Cat in the hat'
        },
        {
            author: 'Oscar Reyes',
            title: 'thats good enough'
        }
    ];

  ngOnInit() {}

}
