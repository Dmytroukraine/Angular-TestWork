import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    password: string = '';
    showPassword: boolean = false;

    getPasswordStrength(password: string): string {
        if (password.length === 0) {
            return 'сірий';
        }

        if (password.length < 8) {
            return 'простий';
        }

        const hasLetters = /[a-zA-Z]/.test(password);
        const hasSymbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
        const hasNumbers = /\d/.test(password);

        if ((hasLetters || hasSymbols || hasNumbers) && !(hasLetters && hasSymbols && hasNumbers)) {
            return 'середній';
        }

        if (hasLetters && hasSymbols && hasNumbers && password.length >= 10) {
            return 'надійний';
        }

        return 'простий';
    }

    calculatePasswordStrength(password: string) {
        this.password = password;
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
}
