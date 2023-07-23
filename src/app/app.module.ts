import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { RouterModule, Routes } from '@angular/router';
// değişkene bağlı routing yapısı
const routess:Routes=[
  {
  path:"c1",
  component:C1Component
 },
 {
   path:"",
   component:C1Component
 },
 {
   path:"c2",
   component:C2Component
 },
 {
   path:"c3",
   component:C3Component
 }
]

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // dosydan routing işlemş
   // RouterModule.forRoot(routes);
    // değişkene bağlı rouing yapısnda
    //RouterModule.forRoot(routess)
    // app mopdule bağlı rooting yapısı
    RouterModule.forRoot([{
     path:"c1",
     component:C1Component
    },
    {
      path:"",
      component:C1Component
    },
    {
      path:"c2",
      component:C2Component
    },
    {
      path:"c3",
      component:C3Component
    }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
