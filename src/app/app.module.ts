import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSellerAddComponent } from './admin-seller-add/admin-seller-add.component';
import { AdminCat1AddComponent } from './admin-cat1-add/admin-cat1-add.component';
import { AdminCat2AddComponent } from './admin-cat2-add/admin-cat2-add.component';
import { AdminUserAddComponent } from './admin-user-add/admin-user-add.component';
import { AdminBranchesAddComponent } from './admin-branches-add/admin-branches-add.component';
import { CatComponent } from './cat/cat.component';
import { SelectComponent } from './select/select.component';
import { MainComponent } from './main/main.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MenuComponent } from './menu/menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const appRoutes: Routes = [
  { path: 'admin/seller/add', component: AdminSellerAddComponent },
  { path: 'admin/users/add', component: AdminUserAddComponent},
  { path: 'admin/cat1/add', component: AdminCat1AddComponent},
  { path: 'admin/cat2/add', component: AdminCat2AddComponent},
  { path: 'admin/branches/add', component: AdminBranchesAddComponent},
  { path: '', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    SigninComponent,
    AdminNavigationComponent,
    AdminSellerAddComponent,
    AdminCat1AddComponent,
    AdminCat2AddComponent,
    AdminUserAddComponent,
    AdminBranchesAddComponent,
    SearchbarComponent,
    MenuComponent,
    CatComponent,
    SelectComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
    , NgZorroAntdModule.forRoot(), FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, OnsenModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent] ,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
