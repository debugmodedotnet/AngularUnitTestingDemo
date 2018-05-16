// import { FileSizePipe } from './filesize.pipe';
// import {TestBed, ComponentFixture} from '@angular/core/testing';
// import {BrowserDynamicTestingModule,platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
// import {Component} from '@angular/core';


// TestBed.initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
// );


// describe('FileSizePipe', () => {

 
//         describe('shallow filesize pipe test', ()=> {

//             @Component({
//                 template:`{{size | filesize : suffix}}`
//             })
//            class TestComponent{
//              suffix;
//              size = 123456789;
//            }

//              let component : TestComponent;
//              let fixture : ComponentFixture<TestComponent>;
//              let el : HTMLElement;

//              beforeEach(()=>{
//                 TestBed.configureTestingModule({
//                     declarations:[
//                         FileSizePipe,
//                         TestComponent
//                     ]
//                 });
//                 fixture = TestBed.createComponent(TestComponent);
//                 component = fixture.componentInstance;
//                 el = fixture.nativeElement;
//             });

//                 it('should convert bytes to megabyte', () => {
//                     fixture.detectChanges();
//                     console.log(el);
//                     expect(el.textContent).toContain('117.74MB');
//                 });
           
// });



// describe('pure pipe',() =>{

//     const pipe = new FileSizePipe();
    
//             it('should convert bytes to megabyte', () => {
//                 expect(pipe.transform(123456789)).toBe('117.74MB');
//                 expect(pipe.transform(987654321)).toBe('941.90MB');
    
//             });
    

// });


// })
