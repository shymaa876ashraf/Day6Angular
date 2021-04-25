import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    PagenotfoundComponent,
    PostComponent,
    ProductWithDiscountComponent,
    ProductWithoutDiscountComponent,
    RegisterComponent,
    LoginComponent,
    RegisterReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
