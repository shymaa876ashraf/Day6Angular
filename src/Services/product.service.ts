import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 ProductList=[{ID: 1,Name:'T-Shirt',Qunatity:44,Pricce:44,img:"../../assets/2.jpg"}
,{ID: 2,Name:'Dress',Qunatity:54,Pricce:230,img:"../../assets/3.jpg"}];
  constructor() { }
  getAllProducts()
  {
    return this.ProductList;
  }
  getAllProductsById(ID:Number)
  {  
         if(typeof(ID)!='number')
           return alert("Plz Enter Number Value");
        else if(ID===null) 
       { return alert("This Product Nor Found"); }
        else
       { 
         for(let i=0;i<this.ProductList.length;i++)
         {
           if(this.ProductList[i].ID==ID)
           {
              return this.ProductList[i];
           }
         }
        
      }
     
  }
}
