import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  /* desde el padre(mediante los Atributos al definir el componente en el padre, como en vue) <-@Input*/
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pageToShow: number;
  @Input() loading: boolean;
  /*hacia el padre(también como un atributo al definir el componente en el padre, como en vue) ->@Output*/
  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();//emitir con parametro booleano
  @Output() goPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }
  onNext(): void {
    this.goNext.emit(true);
  }
  onPage(n: number): void {
    this.goPage.emit(n);
  }
  totalPages() {
    return Math.ceil(this.count / this.perPage) || 0;
  }
  isLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }

}