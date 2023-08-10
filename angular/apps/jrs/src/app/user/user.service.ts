import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user?: IUser = undefined;
  private validUsers: IUser[];

  constructor() {
    this.validUsers = this.initValidUsers();
  }

  public getUser(): IUser | undefined {
    return this.user;
  }

  public signIn(userCredentials: IUserCredentials): IUser | undefined {
    this.user = this.validUsers.find(u => u.email === userCredentials.email && u.password === userCredentials.password);
    return this.user;
  }

  public signOut(): void {
    this.user = undefined;
  }

  public isLoggedIn(): boolean {
    return !!this.user;
  }

  private initValidUsers(): IUser[] {
    return [
      {
        firstName: 'User1',
        lastName: 'Bigfellow',
        email: 'user1@bot.com',
        password: 'user1'
      },
      {
        firstName: 'User2',
        lastName: 'Longfellow',
        email: 'user2@bot.com',
        password: 'user2'
      }
    ];
  }
}
