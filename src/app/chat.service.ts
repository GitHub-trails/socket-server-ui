import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public userList$: BehaviorSubject<{ [key: string]: string }> = new BehaviorSubject({});
  private socket = io('http://localhost:3000');

  constructor() {
    this.socket.on('userList', (users: { [key: string]: string }) => {
      this.userList$.next(users);
    });
  }

  public sendMessage(message: any, targetSocketId?: string) {
    this.socket.emit('message', { targetSocketId, message });
  }

  public setUsername(username: string) {
    this.socket.emit('setUsername', username);
  }

  public getNewMessage = (): Observable<string> => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };

  public getUserList = (): Observable<{ [key: string]: string }> => {
    return this.userList$.asObservable();
  };
}
