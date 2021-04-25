import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IProduct} from '../Shared_Classes&Types/IProduct';
import {ICategory} from '../Shared_Classes&Types/ICategory';
import {DiscountOffers} from '../Shared_Classes&Types/Enum';
import { ProductService } from 'src/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
let Discount:DiscountOffers;
let dis=DiscountOffers;
let StoreName:string;
let StoreLogo:string;
let ProductList :IProduct[];
let CategoryList:ICategory[];
let ClientName:string;
let IsPurshased:Boolean;
let pro;
let product:IProduct;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Discount=DiscountOffers.Discount10;
  dis=DiscountOffers.NoDiscount;
  StoreName='asd';
  StoreLogo='aaa';
  ProductList=[{ID: 1,Name:'T-Shirt',Qunatity:44,Pricce:44,img:"../../assets/2.jpg"}
,{ID: 2,Name:'Dress',Qunatity:54,Pricce:230,img:"../../assets/3.jpg"}];
  CategoryList=[{ID:1,Name:'Clothes'},{ID:2,Name:'Shoes'}];
  ClientName='Shymaa';
  IsPurshased=true;
  Product:any=[];
  pro=false;
  flag=false;

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) 
  { 
  }
  @Output() childData =new EventEmitter();
  @Output() proChanged =new EventEmitter();
  @Output() productChanged=new EventEmitter();
  ngOnInit(): void {
    this.renderValues();
  }
  toggle() {
  alert("asd");
    if(this.IsPurshased==true)
      this.IsPurshased=false;
    else if(this.IsPurshased==false)
    this.IsPurshased=true;
  }
  renderValues()
  {
    this.Product=this.productService.getAllProducts();
    console.log(this.Product);
    if(this.pro==true)
    {
      this.pro=false;
      this.proChanged.emit(this.pro);
    }
    else
    {
      this.pro=true;
      this.proChanged.emit(this.pro);

    }
    console.log(this.pro);
    return this.Product;
  }
  getAllProductsById(id:number):any
  {
   if(isNaN(id)||id==null||this.ProductList.length==undefined)
   {
     return null;
   }
   if(this.flag==true)
   {
     this.flag=false;
     this.productChanged.emit(this.flag);
   }
   else
   {
     this.flag=true;
     this.productChanged.emit(this.flag);

   }
   for(let p of this.ProductList)
   {
     if(p.ID==id)
      return p;
    return null;
   }
  }
  ProductsWithDiscount()
  {
    this.router.navigate(['productwithDiscount'],{relativeTo:this.activatedRoute})
  }

  ProductsWithOutDiscount()
  {
    this.router.navigate(['productwithOutDiscount'],{relativeTo:this.activatedRoute})
  }

}
