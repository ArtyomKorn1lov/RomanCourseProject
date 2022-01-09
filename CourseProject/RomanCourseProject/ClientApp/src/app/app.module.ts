import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAuthComponent } from './dialog-auth/dialog-auth.component';
import { DialogRegComponent } from './dialog-reg/dialog-reg.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CreatOrdersComponent } from './create-orders/create-orders.component';
import { ChoiseTabComponent } from './choise-tab/choise-tab.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ProductChoiseComponent } from './product-choise/product-choise.component';
import { ProductChoiseInfoComponent } from './product-choise-info/product-choise-info.component';
import { CustomerChoiseComponent } from './customer-choise/customer-choise.component';
import { CustomerChoiseInfoComponent } from './customer-choise-info/customer-choise-info.component';
import { OrdersInfoComponent } from './orders-info/orders-info.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SupplyListComponent } from './supply-list/supply-list.component';
import { SupplyInfoComponent } from './supply-info/supply-info.component';
import { SupplyChoiseComponent } from './supply-choise/supply-choise.component';
import { SupplyChoiseInfoComponent } from './supply-choise-info/supply-choise-info.component';
import { CreateSupplyComponent } from './create-supply/create-supply.component';
import { EditSupplyComponent } from './edit-supply/edit-supply.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    MainpageComponent,
    DialogAuthComponent,
    DialogRegComponent,
    OrdersListComponent,
    CreatOrdersComponent,
    ChoiseTabComponent,
    ProductListComponent,
    CreateProductComponent,
    ProductInfoComponent,
    EditProductComponent,
    CustomerListComponent,
    CustomerInfoComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ProductChoiseComponent,
    ProductChoiseInfoComponent,
    CustomerChoiseComponent,
    CustomerChoiseInfoComponent,
    OrdersInfoComponent,
    EditOrdersComponent,
    ProfileInfoComponent,
    UserListComponent,
    UserInfoComponent,
    UserCreateComponent,
    UserEditComponent,
    SupplyListComponent,
    SupplyInfoComponent,
    SupplyChoiseComponent,
    SupplyChoiseInfoComponent,
    CreateSupplyComponent,
    EditSupplyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      { path: 'delivery-list', component: OrdersListComponent },
      { path: 'create-delivery', component: CreatOrdersComponent },
      { path: 'delivery-info', component: OrdersInfoComponent },
      { path: 'edit-delivery', component: EditOrdersComponent },
      { path: 'detail-choise', component: ProductChoiseComponent },
      { path: 'detail-choise-info', component: ProductChoiseInfoComponent },
      { path: 'provider-choise', component: CustomerChoiseComponent },
      { path: 'provider-choise-info', component: CustomerChoiseInfoComponent },
      { path: 'detail-list', component: ProductListComponent },
      { path: 'create-detail', component: CreateProductComponent },
      { path: 'detail-info', component: ProductInfoComponent },
      { path: 'edit-detail', component: EditProductComponent },
      { path: 'provider-list', component: CustomerListComponent},
      { path: 'provider-info', component: CustomerInfoComponent},
      { path: 'create-provider', component: CreateCustomerComponent},
      { path: 'edit-provider', component: EditCustomerComponent},
      { path: 'supply-list', component: SupplyListComponent},
      { path: 'create-supply', component: CreateSupplyComponent},
      { path: 'supply-info', component: SupplyInfoComponent},
      { path: 'edit-supply', component: EditSupplyComponent},
      { path: 'supply-choise', component: SupplyChoiseComponent},
      { path: 'supply-choise-info', component: SupplyChoiseInfoComponent},
      { path: 'orders', component: ChoiseTabComponent },
      { path: 'profile-info', component: ProfileInfoComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'user-create', component: UserCreateComponent },
      { path: 'user-edit', component: UserEditComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
