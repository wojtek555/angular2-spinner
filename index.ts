import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SpinnerComponent } from './angular2-spinner';

export { SpinnerComponent } from './angular2-spinner';

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent,
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
})
export class SpinnerModule {}
