import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  template: '',
  styles: [require('./angular2-spinner.css')]
})
export class SpinnerComponent implements OnInit {

  @Input()
  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  size = 25;

  @Input()
  @HostBinding('style.borderWidth.px')
  tickness = 2;

  @Input()
  @HostBinding('style.borderTopColor')
  color = '#4f6aa7';

  @Input()
  opacity = '.1';

  @HostBinding('style.borderBottomColor')
  @HostBinding('style.borderLeftColor')
  @HostBinding('style.borderRightColor')
  secondColor = '';

  ngOnInit(): void {
    const c = this.hexToRgb(this.color);
    this.secondColor = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + this.opacity + ')';
  }

  private hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }
}
