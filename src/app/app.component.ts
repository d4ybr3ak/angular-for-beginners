import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './types/user.interface';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  User: UserInterface[] = [];

  constructor( private UserService: UsersService) {}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((User: UserInterface[])  => {
      console.log(User);
      this.User = User;
    })
  }

  removeUser(id: number) : void{
    this.UserService.removeUser(id).subscribe(() => {
      this.User = this.User.filter(User => User.id !== id);
    }) 
  }

  addUser(name: string) : void {
    this.UserService.addUser(name).subscribe(newUser => {
      this.User.push(newUser);
    })
  }

}
