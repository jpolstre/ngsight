import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  //props deben ser siempre @Input()
  /* desde el padre(mediante los Atributos al definir el componente en el padre, como en vue) <-@Input*/

  /*
   
   Cada vez que se modifica alguna propiedad ([page], [perPage] , [count], [pageToShow],
  [loading] desde el padre(section.orders.components.ts)este componente(app-pagination), se vuelve a renderizar.
   */
  @Input() page: number;
  @Input() perPage: number;
  @Input() count: number;

  @Input() pageToShow: number;
  @Input() loading: boolean;

  //emiters debe ser siempre @Output()
  /*hacia el padre(también como un atributo al definir el componente en el padre, como en vue) ->@Output*/
  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();//emitir con parametro booleano
  @Output() goPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPrev(): void {
    //avisa al padre. 
    this.goPrev.emit(true);
  }
  onNext(): void {
    //avisa al padre. 
    this.goNext.emit(true);
  }
  onPage(n: number): void {
    this.goPage.emit(n);
  }
  totalPages() {
    const totalPages = Math.ceil(this.count / this.perPage) || 0;
    // console.log('total pages', totalPages);
    return totalPages;
  }
  isLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }
  isFirstPage(): boolean {
    return this.page === 1;
  }
  /*como this.page es @input() , cada vez que se modifica en el padre(section-ordes.com..) afecta al hijo(paginatio.component..) y se vuelve a ejecutar  getPages() y el dom de su template html se refresca.*/

  /*Escucha cambios de los props @Input()s (que pueden ser modificados en el padre(section-ordes.component.)), involucra(this.page, this.count, this.perPage, this.pageToShow) */

  /*EN ANGULAR TODOS LOS MÉTODOS QUE INVOLUCRAN A LAS PROPIEDADES(this.page, this...) SON COMO LOS MÉTODOS computed en Vue!!!! */
  getPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const thisPage = this.page || 1;//si this.page no esta definido(o null)=> por defecto sera 1(la primera pagina).
    const pages: number[] = [];
    pages.push(thisPage);//la pagina actual se adiciona primero y se utilizara como pivote para generar las otros botones.
    const pagesToShow = this.pageToShow || 9;//botones que se ven o 9
    for (let i = 0; i < pagesToShow - 1; i++) {//no se cuenta thisPage que ya esta dentro de pages(push(thisPage)).

      /*Esto es para que a medida que se va navegando por las paginas vayan apareciendo y desapareciendo los botones de acuerdo a pagesToShow y utilizando como pivote la pagina actual "thisPage"*/
      if (pages.length < pagesToShow) {
        const min = Math.min.apply(null, pages);//se obtiene el min del array pages.
        if (min > 1) {//si el mínimo de pages es mayor a 1->se adiciona el anterior(min-1) al array pages.
          pages.push(min - 1);
        }
      }
      if (pages.length < pagesToShow) {
        const max = Math.max.apply(null, pages);
        if (max < totalPages) {
          pages.push(max + 1);
        }
      }

    }
    //finalmente se retorna la lista de números generados, ordenados ascendentemente.
    pages.sort((a, b) => a - b);
    return pages;

  }

  getFrom(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }
  getTo(): number {
    return this.getFrom() + this.perPage - 1;
  }

}
