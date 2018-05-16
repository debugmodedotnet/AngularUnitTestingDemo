import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {By} from '@angular/platform-browser';
import { LoginComponent , User } from './login.component';
import {DebugElement } from '@angular/core';

TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe('Component: Login', () => {
    
      let component: LoginComponent;
      let fixture: ComponentFixture<LoginComponent>;
      let submitEl: DebugElement;
      let loginEl: DebugElement;
      let passwordEl: DebugElement;
    
      beforeEach(() => {
    
        TestBed.configureTestingModule({
          declarations: [LoginComponent]
        });
    
        // create component and test fixture
        fixture = TestBed.createComponent(LoginComponent);
    
        // get test component from the fixture
        component = fixture.componentInstance;
    
        submitEl = fixture.debugElement.query((By.css('button')));
        loginEl = fixture.debugElement.query(By.css('input[type=email]'));
        passwordEl = fixture.debugElement.query(By.css('input[type=password]'));


      });


      it('Setting enabled to false disables the submit button', () => {
        component.enabled = false;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeTruthy();
    });





    it('Entering email and password emits loggedIn event', () => {
        let user: User;
        loginEl.nativeElement.value = "test@example.com"; 
        passwordEl.nativeElement.value = "12347";
      
        component.loggedIn.subscribe((value) => user = value);
      
        submitEl.triggerEventHandler('click', null); 
      
        expect(user.email).toBe("test@example.com");
        expect(user.password).toBe("123456");
      });
    });