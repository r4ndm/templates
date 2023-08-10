import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user.interface';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  public showSignOutMenu: boolean = false;

  constructor(private userService: UserService) {}

  public get user(): IUser | undefined {
    return this.userService.getUser();
  }

  public get signedIn(): boolean {
    return !!this.user;
  }

  public toggleSignOutMenu(): void {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  public signOut(): void {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
