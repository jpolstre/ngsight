import { Server } from './../shared/server';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  /*es como props deen Vue */
  @Input() serverInput:Server;

  constructor() { }

  ngOnInit(): void {
  }

}
