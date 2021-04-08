import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInterface } from '../types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() User: UserInterface[];
  @Output() removeUser = new EventEmitter<string>();
  @Output() addUserEvent = new EventEmitter<string>();
  
  newUserName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setNewUserName(userName: string) : void{
    this.newUserName = userName;
  }

  addUser() : void {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = "";
  }

}
