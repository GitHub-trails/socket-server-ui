import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

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
  captchaResolved = false;
  captchaResponse = '';

  constructor(private chatService: ChatService) {}

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
    this.chatService.setUsername(this.username, this.captchaResponse);
  }

  getUserListKeys(): string[] {
    return Object.keys(this.userList);
  }

  siteKey = '0x4AAAAAAAghjzXnibYzdPWZ';
  sendCaptchaResponse(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaResponse = captchaResponse;
    this.captchaResolved = true;
  }
}