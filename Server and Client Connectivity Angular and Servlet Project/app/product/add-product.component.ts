import { Product } from './product';
import { Component } from '@angular/core';
import { ProductService } from './product-service';
@Component({selector :'add-prod',
templateUrl:'./add-product.component.html'
})

export class AddProductComponent{
    product: Product =new Product();

  
    // add(){
    //     console.log("add called....."); 
    //     console.log(JSON.stringify(this.product));    

constructor(private ps: ProductService){
            

}

        // add(pform){
        //     console.log("add called....."); 
        //     console.log(pform.value);    
          //no need to create object if we use DI
            //  let ps =new ProductService();

          //  ps.sentToServer(this.product);
   // }
}
