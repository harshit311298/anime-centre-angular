// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMessage } from './chat-message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chatMessages: ChatMessage[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getChatMessages().subscribe((messages) => {
      this.chatMessages = messages;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message: ChatMessage = {
        sender: 'You', // You can customize the sender's name
        message: this.newMessage,
        timestamp: new Date(),
      };
      this.chatService.addMessage(message);
      this.newMessage = '';
    }
  }
}
