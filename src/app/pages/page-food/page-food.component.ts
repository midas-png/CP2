import { Component } from '@angular/core';

@Component({
  selector: 'app-page-food',
  templateUrl: './page-food.component.html',
  styleUrls: ['./page-food.component.css']
})
export class PageFoodComponent{

  constructor() {}
  
  infoStorage: infoTypes[] =
  [
    {
      id: 1,  
      url: 'assets/1.jpg',
      alt: 'picture 1'
    },
    {
      id: 2,  
      url: '',
      alt: 'picture 2'
    },
  ]

  isValid(infoId: number, id: number): boolean {
    return infoId == id
  }
}

interface infoTypes {
  id: number,
  url: string;
  alt: string;
}
