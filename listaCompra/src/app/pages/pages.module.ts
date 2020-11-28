import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductosModule } from './productos/productos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ProductosModule
  ],
  exports:[LoginModule,ProductosModule]
})
export class PagesModule { }
