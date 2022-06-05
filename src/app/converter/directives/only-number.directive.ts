import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumberDirective {

  public onToched: any;
  public onChange: any;
  public isDisabled: boolean = true;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  public onKeyup($event: any): void {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, ''); //remove tudo que não é número

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais); //tira o ponto '.' se ja tiver sido digitado
    }

    $event.target.value = valor;
  }
}
