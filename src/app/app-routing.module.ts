import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'productspage',component:ProductComponent},
  {path: 'userspages', component:UserComponent},
  {path: 'homepage', component: ProductComponent,
  children:
  [
    {path:'productwithDiscount',component:ProductWithDiscountComponent},
    {path:'productwithOutDiscount',component:ProductWithoutDiscountComponent}
  ]
},
{path:'registerpage',component:RegisterComponent},
  {path: 'postspage', component:PostComponent},
  {path:'loginpage',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
