import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service'; // step 13

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  //constructor() { }
  constructor(public messageService: MessageService) {} // step 13

  ngOnInit(): void {
  }

}
