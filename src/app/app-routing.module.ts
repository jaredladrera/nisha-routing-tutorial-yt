import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'contact', component: ContactComponent},
  { path: 'adduser', component: AddUserComponent, canDeactivate: [CanDeactivateGuard]},
  // { path: 'product', loadChildren: './product-dashboard/product-dashboard.module#ProductDashboardModule'},
  { path: 'users', component: UsersComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'user/:id', component: UserComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children  : [
      // { path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent }
    ]
  },
  { path: 'about', component: AboutComponent,
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: 'feedback', outlet: 'feeds', component: FeedbackComponent }
    ]
  },

  { path: '**', redirectTo: 'about`' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
