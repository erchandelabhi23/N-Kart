import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//import {CalendarModule} from 'primeng/calendar';
//import {InputMaskModule} from 'primeng/inputmask';
//import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
//Pipes
import { PipesComponent } from './pipes/pipes.component';

//Custom pipes

import {SortPipe} from './pipes/pipes.CustomSort';

//services

import { CommonService } from './services/common.service';
import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { SubscriptionService } from './services/subscription.service';
import { PhoneFormatPipe } from './pipes/phoneformat.pipe';
//import { SimpleDirective } from './directives/simple.directive';
//import { NumberOnlyDirective } from './directives/numberonly.directive';
//import { ProfileDetailsComponent } from './profile-details/profile-details.component';
//import { DropdownComponent } from './dropdown/dropdown.component';







@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    WishlistComponent,
    CartComponent,
    HomeComponent,
    ProfilesComponent,
    PhoneFormatPipe,
    SortPipe,
    PipesComponent,

    //directive

    // SimpleDirective,
    // NumberOnlyDirective,
    //ProfileDetailsComponent,
    //DropdownComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // CalendarModule,
    //InputMaskModule,
    //PaginationModule.forRoot(),
    RouterModule.forRoot([
      //Create the route objects.
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profiles', component: ProfilesComponent },
      {path:   'pipes', component: PipesComponent}
    ])
  ],

  providers: [CommonService, DataService, ProductService, SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }








