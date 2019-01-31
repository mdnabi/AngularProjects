import { Product } from './product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {providerDef} from '@angular/core/src/view';
import { Observable } from 'rxjs';



@Injectable()       //DI
export class ProductService{
    //injecting Angular's HttpClient API
    products : Product[];
    constructor(private http:HttpClient)
    {

    }

    sentToServer(product : Product){
        //our code to communicate with server will be here 

      

    }
    retrieveFromServer(url :string) : Observable<Product[]>{
        //our code to communicate to the server call

       // let url = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet'
        return this.http.get<Product[]>(url);
        /* this.http.get<Product[]>(url).subscribe(data =>
            {
                this.products=data;
                console.log(data);
            });

                return this.products;
                */
        //  let p1 = new Product(10,"Balaji",100);
        // let p2 = new Product(20,"Kurkure",150);
        // let p3= new Product(50,"Lays",200);

        //let products=[p1,p2,p3];
        // return products;


    }
    // retrieveFromServer1() :Observable<Product[]>{
    //     //our code to communicate to the server call

    //     let url = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet?go=prev'
    //     return this.http.get<Product[]>(url);//  let p1 = new Product(10,"Balaji",100);
    //     // let p2 = new Product(20,"Kurkure",150);
    //     // let p3= new Product(50,"Lays",200);

    //     //let products=[p1,p2,p3];
    //     // return products;


    // }
    // retrieveFromServer2() :Observable<Product[]>{
    //     //our code to communicate to the server call

    //     let url = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet?go=next'
    //     return this.http.get<Product[]>(url);
        //  this.http.get<Product[]>(url).subscribe(data =>
        //     {
        //         this.products=data;
        //         console.log(data);
        //     });

        //         return this.products;
        //  let p1 = new Product(10,"Balaji",100);
        // let p2 = new Product(20,"Kurkure",150);
        // let p3= new Product(50,"Lays",200);

        //let products=[p1,p2,p3];
        // return products;


    }
  