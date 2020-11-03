import { SetServStatus } from './../shared/types';
import { Server } from './../shared/models/server';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  /*es como props en Vue, ademas con @Input manda al padre todo lo que se modifica en el objeto(propiedad)*/
  @Input() serverInput: Server;
  @Output() setServStatus = new EventEmitter<SetServStatus>();

  public color: string;
  public buttonText: string;

  constructor() {}

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }

  private setServerStatus(isOnline: boolean) {
    this.serverInput.isOnline = isOnline;
    if (isOnline) {
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
      this.setServStatus.emit({ id: this.serverInput.id, payload: 'activate' });
    } else {
      this.color = '#ff6b6b';
      this.buttonText = 'Start';
      this.setServStatus.emit({
        id: this.serverInput.id,
        payload: 'deactivate',
      });
    }
  }

  toggleStatus(isOnlineStatus: boolean) {
    this.setServerStatus(!isOnlineStatus);
  }
}
