import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HonoWebsocketService {

  private ws: WebSocket | null = null;

  constructor(private authService: AuthService) {}

  connect(): void {
    // const token = this.authService.token;
    // if (!token) return;

    this.ws = new WebSocket(`wss://hono-trail.tesajad711.workers.dev/ws`);

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      // Handle received message
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  sendMessage(text: string): void {
    if (this.ws) {
      const message = { text, userId: 'your-user-id' };
      this.ws.send(JSON.stringify(message));
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
    }
  }
}
