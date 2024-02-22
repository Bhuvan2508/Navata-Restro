import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LegalComponent } from './legal/legal.component';
import { ExtendedComponent } from './extended/extended.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';



@NgModule({
  declarations: [
     AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LegalComponent,
    ExtendedComponent,
    TestComponent,
    Test1Component, 
        
       
                            
      ],
   
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
