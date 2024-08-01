import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  newMessage = '';
  messageList: string[] = [];
  userList: { [key: string]: string } = {};
  selectedUser: string | null = null;
  lastMessages: { [key: string]: string } = {};

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      if (this.selectedUser) {
        // Update last message for the selected user
        const lastMessageUser = message.split(':')[0];
        if (this.userList[lastMessageUser]) {
          this.lastMessages[lastMessageUser] = message;
        }
      }
    });

    this.chatService.getUserList().subscribe((users: { [key: string]: string }) => {
      this.userList = users;
      this.lastMessages = {}; // Clear last messages when user list changes
    });
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedUser) {
      this.chatService.sendMessage(this.newMessage, this.userList[this.selectedUser]);
      this.newMessage = '';
    }
  }

  selectUser(user: string) {
    this.selectedUser = user;
    // Optionally, you can fetch previous messages if needed
    // e.g., this.chatService.getPreviousMessages(user).subscribe(messages => { ... });
  }
}
