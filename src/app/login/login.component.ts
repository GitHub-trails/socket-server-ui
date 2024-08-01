import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private chatService: ChatService) { }

  login() {
    // this.chatService.login(this.username, this.password);
  }
}
