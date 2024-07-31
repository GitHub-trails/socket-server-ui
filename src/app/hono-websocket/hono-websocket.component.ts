import { Component, OnInit, OnDestroy } from '@angular/core';
import { HonoWebsocketService } from '../hono-websocket.service';

@Component({
  selector: 'app-hono-websocket',
  templateUrl: './hono-websocket.component.html',
  styleUrls: ['./hono-websocket.component.css']
})
export class HonoWebsocketComponent implements OnInit, OnDestroy {
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: HonoWebsocketService) {}

  ngOnInit() {
    this.chatService.connect();
  }

  ngOnDestroy() {
    this.chatService.disconnect();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}