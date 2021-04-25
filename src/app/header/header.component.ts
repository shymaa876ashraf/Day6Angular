import { Component, OnInit } from '@angular/core';
import {ICategory} from '../Shared_Classes&Types/ICategory';
let CategoryList:ICategory[];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  images:string="../../assets/1.jpg";
  CategoryList=[{ID:1,Name:'Clothes'},{ID:2,Name:'Shoes'}];
  constructor() { }

  ngOnInit(): void {
  }

}
