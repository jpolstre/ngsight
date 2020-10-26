import { Server } from './../shared/server';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  /*es como props en Vue, ademas con @Input manda al padre todo lo que se modifica en el objeto(propiedad)*/
  @Input() serverInput: Server;

  public color: string;
  public buttonText: string;

  constructor() { }

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline)
  }

  private setServerStatus(isOnline: boolean) {
    this.serverInput.isOnline = isOnline
    if (isOnline) {
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    } else {
      this.color = '#ff6b6b';
      this.buttonText = 'Start';
    }
  }

  toggleStatus(isOnlineStatus: boolean) {
    console.log(this.serverInput.name, ':', isOnlineStatus);
    this.setServerStatus(!isOnlineStatus);
  }

}
