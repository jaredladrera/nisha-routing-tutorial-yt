import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { ProductComponent } from './product-dashboard/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    LocationComponent,
    FeedbackComponent,
    AddUserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AdminGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
