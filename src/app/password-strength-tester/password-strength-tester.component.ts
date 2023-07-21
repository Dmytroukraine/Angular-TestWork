import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-tester',
  templateUrl: './password-strength-tester.component.html',
  styleUrls: ['./password-strength-tester.component.css']
})
export class PasswordStrengthTesterComponent {
  password: string = '';
  passwordStrength: string = '';
  showPassword: boolean = false;
  hasLetters: boolean = false;
  hasSymbols: boolean = false;
  hasNumbers: boolean = false;

  calculatePasswordStrength(password: string) {
    this.password = password;
    this.passwordStrength = this.getPasswordStrength(password);
  }

  getPasswordStrength(password: string): string {
    if (password.length < 8) {
      return 'не надійний';
    }

    this.hasLetters = /[a-zA-Z]/.test(password);
    this.hasSymbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
    this.hasNumbers = /\d/.test(password);

    if ((this.hasLetters || this.hasSymbols || this.hasNumbers) && !(this.hasLetters && this.hasSymbols && this.hasNumbers)) {
      return 'не достатньо надійний';
    }

    return 'надійний';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}