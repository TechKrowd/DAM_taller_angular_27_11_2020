import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../model/producto';
import { LoginService } from './login.service';

@Injectable()
export class ProductosService{
    private productos:Array<Producto>;
    private productos$: Subject<Array<Producto>>;

    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ){
        this.productos = new Array<Producto>();
        this.productos$ = new Subject<Array<Producto>>();
    }

    public getProductosSub (): Observable<any>{
        return this.productos$.asObservable();
    }

    public getListaProductos(): Array<Producto>{
        return this.productos;
    }

    public getProductos():void{
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer '+this.loginService.getToken()
                }
            )
        };
        this.httpClient.get("http://localhost:8080/api/productos",httpOptions).subscribe(
            (response:any)=>{
                console.log(JSON.stringify(response));
                this.productos = response;
                this.productos$.next(this.productos);
            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }


    public deleteProduct(id: number){
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer '+this.loginService.getToken()
                }
            )
        };

        this.httpClient.delete("http://localhost:8080/api/productos/"+id,httpOptions).subscribe(
            (response:any)=>{
                console.log(response);
                this.getProductos();
            },
            error=>{
                console.log(error);
                //this.loginService.logout();
            }
        );
    }
}