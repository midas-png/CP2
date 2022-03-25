import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() {}
  
  routes: routesInterface[] =
  [
    {
      name: "Помидоры",
      id: 1
    },
    {
      name: "Огурцы",
      id: 2
    },
    {
      name: "Котлеты",
      id: 3
    },
  ]
}

interface routesInterface {
  name: string;
  id: number;
}