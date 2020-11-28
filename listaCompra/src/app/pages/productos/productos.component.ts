import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { LoginService } from 'src/app/services/login.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {

  public productos: Array<Producto>;
  private sub: any;
  private subLogin: any;

  constructor(
    private loginService: LoginService,
    private productosService: ProductosService,
    private router: Router
  ) { 
    if (!this.loginService.getIslogin){
      this.router.navigate(["login"]);
    }
    this.productos = this.productosService.getListaProductos();
  }
  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.productosService.getProductosSub().subscribe(
      (response: Array<Producto>)=>{
        this.productos = response;
      },
      error=>{
        console.log(error);
      }
    );

    this.subLogin = this.loginService.getIsloginSub().subscribe(
      (response: boolean)=>{
        if(response===false){
          this.router.navigate(["login"]);
        }
      },
      error=>{
        console.log(error);
      }
    );

    this.productosService.getProductos();
  }


  public deleteProduct(id: number):void{
    console.log("Click "+id);

    this.productosService.deleteProduct(id);
  }

}
