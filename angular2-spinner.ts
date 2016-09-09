import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'spinner',
  template: '',
  styles: [`
    @keyframes spin {
      from {transform: rotate(0deg);}
      to {transform: rotate(360deg);}
    }

    :host {
      position:relative;
      box-sizing: border-box;
      display:inline-block;
      padding:0px;
      border-radius:100%;
      border-style:solid;
      animation: spin 0.8s linear infinite;
    }

    :host .margins {
        margin: 0px 10px;
    }
  `],
  host: {
    '[style.width]':'size + "px"',
    '[style.height]':'size + "px"',
    '[style.borderWidth]':'tickness + "px"',
    '[style.borderTopColor]':'color',
    '[style.borderBottomColor]':'secondColor',
    '[style.borderLeftColor]':'secondColor',
    '[style.borderRightColor]':'secondColor'
  },
})
export class SpinnerComponent implements OnInit {

  @Input() size:number = 25;

  @Input() tickness:number = 2;

  @Input() color:string = '#4f6aa7';

  @Input() opacity:string = ".1";

  secondColor:string = '';

  ngOnInit():void {
    const c = this.hexToRgb(this.color);
    this.secondColor = 'rgba('+c.r + ',' + c.g + ',' + c.b + ', ' + this.opacity +')';
  }

  private hexToRgb(hex:string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }
}