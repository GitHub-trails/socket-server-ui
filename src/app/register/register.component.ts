import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private chatService: ChatService) { }

  register() {
    // this.chatService.register(this.username, this.password)
    //   .subscribe(() => {
    //     alert('Registration successful');
    //     // Redirect to login page or automatically log in
    //   });
  }
}
