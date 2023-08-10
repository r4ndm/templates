import { Component } from '@angular/core';
import { IUserCredentials } from '../user.interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public credentials: IUserCredentials = { email: '', password: '' };
  public signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  public signIn(): void {
    const user = this.userService.signIn(this.credentials);
    this.signInError = !user;

    if (user) {
      void this.router.navigate(['/catalog']);
    }
  }
}
