import { Product } from "./product";

import {Component,OnInit} from '@angular/core'
import { template } from '@angular/core/src/render3';
import { ProductService } from './product-service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';



@Component ({
    selector:'pro-list',
    templateUrl:'./product.component.html'
})
export class ProductListComponent implements OnInit{

    products: Product[];
    currentPosition :number =1;
    pageSize :number =3;

    
    constructor(private ps: ProductService){
        
    }
    addList()
    { 
        let url1 = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet2?cp='+this.currentPosition;

        this.ps.retrieveFromServer(url1).subscribe(data =>
            {
                this.products =  data;
            });;
    }
    prevList()
    {
        this.currentPosition -=this.pageSize;
         let url1 = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet2?cp='+this.currentPosition;

        this.ps.retrieveFromServer(url1).subscribe(data =>
            {
                this.products =  data;
            });;

    }
    nextList()
    {
        this.currentPosition +=this.pageSize;
         let url1 = 'http://localhost:8081/pagination_jquery_ajax_webapp/ProductControllerServlet2?cp='+this.currentPosition;

        this.ps.retrieveFromServer(url1).subscribe(data =>
            {
                this.products =  data;
            });;

    }

    ngOnInit(){
        
        // let p1 = new Product(10,"Balaji",100);
        // let p2 = new Product(20,"Kurkure",150);
        // let p3= new Product(50,"Lays",200);

        // this.products=[p1,p2,p3];
        
        
       
        


    }
   

}