# Angular2 Spinner

Simple preloading indicator.

![preview](preview.png)

## Instalation

```
import { SpinnerModule } from 'angular2-spinner';
....
imports: [
    SpinnerModule,
],
...
 ```

## Usage

```
<spinner [size]="20" [tickness]="1" [color]="#ff66ff"></spinner>
```


```
<button [disabled]="working" md-icon-button (click)="save()">
    <md-icon *ngIf="!working">save</md-icon>
    <spinner *ngIf="working" [tickness]="1" [size]="20"></spinner>
</button>
```