import { ThrowStmt } from '@angular/compiler';
import { Component,ViewChild } from '@angular/core';
import {ProductComponent} from '../app/product/product.component'
import { IProduct } from './Shared_Classes&Types/IProduct';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductComponent) child:ProductComponent;
  title = 'day11';
  imgUrl="../../assets/1.jpg";  
  Product:any=[];
  pro:Boolean;
  flag:Boolean;
  id:any;
  pros:IProduct;
  // thenblock=true;
  // elseblock=true;
  ngAfterViewInit()
  {
   this.Product=this.child.renderValues();
   console.log("Parent"+ this.Product);
  }
  getAllPro(id:string)
  {
    // this.flag=false;
    // console.log(this.flag);
   this.pros= this.child.getAllProductsById(parseInt(id));
   console.log(this.pros)
   return this.pros;
  }

}
