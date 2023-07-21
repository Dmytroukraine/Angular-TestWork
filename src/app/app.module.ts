import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordStrengthTesterComponent } from './password-strength-tester/password-strength-tester.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthTesterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
