import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class MessageService {
  messages: string[] = []

  add(message: string){
    this.messages.push(message);
  }
  clear(){
    this.messages = []
  }
  constructor() { }

}
