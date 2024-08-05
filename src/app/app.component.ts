import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newMessage = '';
  messageList: { text: string, isSent: boolean }[] = [];
  username = '';
  targetSocketId = '';
  userList: { [key: string]: string } = {};
  form: FormGroup;
  captchaResolved = false;

  constructor(private chatService: ChatService, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push({ text: message, isSent: false });
    });

    this.chatService.getUserList().subscribe((users: { [key: string]: string }) => {
      this.userList = users;
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage, this.targetSocketId);
    this.messageList.push({ text: this.newMessage, isSent: true });
    this.newMessage = '';
  }

  setUsername() {
    this.chatService.setUsername(this.username);
  }

  getUserListKeys(): string[] {
    return Object.keys(this.userList);
  }

  siteKey = '0x4AAAAAAAghjzXnibYzdPWZ';
  sendCaptchaResponse(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResolved = true;
  } 
}