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
    const value = $event.target.value;
    const posDecimais = value.indexOf('.');

    let onlyNuberValue = value.replace(/[\D]/g, ''); //remove tudo que não é número

    if (posDecimais > 0) {
      onlyNuberValue = onlyNuberValue.substr(0, posDecimais) + '.' + onlyNuberValue.substr(posDecimais); //tira o ponto '.' se ja tiver sido digitado
    }

    $event.target.value = onlyNuberValue;
  }
}
