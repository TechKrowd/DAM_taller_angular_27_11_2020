import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoginService } from './services/login.service';

import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [LoginService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
