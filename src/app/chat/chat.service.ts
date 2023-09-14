// chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from './chat-message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatMessages: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  getChatMessages() {
    return this.chatMessages.asObservable();
  }

  addMessage(message: ChatMessage) {
    const currentMessages = this.chatMessages.value;
    currentMessages.push(message);
    this.chatMessages.next(currentMessages);
  }
}
