import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { LoaderService } from './loader.service.ts';
import { AppComponent } from './app.component.ts';

@NgModule({
  imports: [RouterModule.forRoot([], { initialNavigation: false })],
  exports: [RouterModule]
})
class AppRoutingModule { }

@NgModule({
  // import Angular's BrowserModule
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [LoaderService, { provide: APP_BASE_HREF, useValue: '/' }],
  // register our component with the module
  declarations: [
    AppComponent
  ],
  // indicate the bootstrap component
  bootstrap: [AppComponent]
})
export default class AppModule {}
