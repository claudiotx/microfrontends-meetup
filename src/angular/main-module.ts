import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router';
import AngularApp from './index.component.ts'
import { enableProdMode } from '@angular/core'
import { APP_BASE_HREF } from "@angular/common"

enableProdMode()

@NgModule({
  imports: [RouterModule.forRoot([], { initialNavigation: false })],
  exports: [RouterModule]
})
class AppRoutingModule { }

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [
    AngularApp
  ],
  bootstrap: [AngularApp]
})
export default class MainModule {
}