import { SetServStatus } from './../../shared/types';
import { ServerService } from './../../services/server.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Server } from '../../shared/models/server';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// const SAMPLE_SERVERS: Server[] = [
//   { id: 1, name: 'dev-web', isOnline: true },
//   { id: 2, name: 'dev-mail', isOnline: false },
//   { id: 3, name: 'prod-web', isOnline: true },
//   { id: 4, name: 'prod-mail', isOnline: true },
// ];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss'],
})
export class SectionHealthComponent implements OnInit, OnDestroy {
  // para liberar memoria cuando el componente se destruya, ya que se carga la memoria al realizar subscribe(..).
  private $destroy = new Subject<any>();

  // = SAMPLE_SERVERS
  servers: Server[];
  constructor(private _serverService: ServerService) {}

  ngOnInit(): void {
    this._serverService
      .getServers()
      .pipe(takeUntil(this.$destroy)) //esta linea solo  es para liberar memoria cuando el componente se destruya
      .subscribe((serversResponse: Server[]) => {
        this.servers = serversResponse;
      });
  }

  setServStatus(item: SetServStatus) {
    console.log('recibido', item);
    this._serverService.setServerStatus(item).subscribe((res) => {});
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}

/*
  para liberar la memaoria que cargan los subscribe(..):

  1. private destroy$ = new Subject<any>();

  unMétodo(){
    this._serverService
      .getServers()
    2.  .pipe(takeUntil(this.$destroy)) //esta linea solo  es para liberar memoria cuando el componente se destruya
      .subscribe((serversResponse: Server[]) => {
        this.servers = serversResponse;
      });
    }

  3.
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
 
 */
