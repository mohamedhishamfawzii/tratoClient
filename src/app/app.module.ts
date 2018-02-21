import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MenuComponent } from './menu/menu.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CatComponent } from './cat/cat.component';
import { SelectComponent } from './select/select.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    SigninComponent,
    SearchbarComponent,
    MenuComponent,
    CatComponent,
    SelectComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule
    , NgZorroAntdModule.forRoot(), FormsModule ,
    ReactiveFormsModule,BrowserAnimationsModule,NoopAnimationsModule,MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
