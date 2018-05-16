// import {TestBed} from '@angular/core/testing';
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// import {StockInventoryService} from './stock-inventory.service';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// import {Http,Response,ResponseOptions} from '@angular/http';

// TestBed.initTestEnvironment(BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
//     );

//     function createResponse(body) {
//         return Observable.of(
//             new Response(new ResponseOptions({ body: JSON.stringify(body) }))
//         )
//     }
    

//     class   MockHttp{
//         get(){
//             return createResponse([]);
//         }
//     }

//     const cartItems = [{ product_id: 1, quanity: 10 }, { product_id: 2, quanity: 12 }];
//     const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 1, price: 100, name: 'Test 1' }];
    
    
//     describe('servicetest',()=>{

//         let service : StockInventoryService;
//         let http : Http; 
    
        
//             beforeEach(()=>{


//                 const bed = TestBed.configureTestingModule({
//                     providers: [
//                         StockInventoryService,
//                         { provide: Http, useClass: MockHttp }
//                     ]
//                 });
//                 http = bed.get(Http);
//                 service = bed.get(StockInventoryService);
        
        
                
//             });

            

//             // it('should get cart items', () => {
//             //     spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));
//             //     service.getCartItems().subscribe((result) => {
//             //         expect(result.length).toBe(2);
//             //       // cartItems[0].product_id= 99;
//             //        // expect(result).toEqual(cartItems);
//             //     });
            
//             // });

//             it('should get ptroduct items', () => {
//                 spyOn(http, 'get').and.returnValue(createResponse([...productItems]));
//                 service.getProducts().subscribe((result) => {
//                     expect(result.length).toBe(2);
//                     expect(result).toEqual(productItems);
//                 });
            
//             });
            
            




//         })
        