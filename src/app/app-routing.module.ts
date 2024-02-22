import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { ExtendedComponent } from './extended/extended.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Legal', component: LegalComponent },
  { path: 'Extended', component: ExtendedComponent },
  { path: 'test', component: TestComponent },
  { path: 'test1', component: Test1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
