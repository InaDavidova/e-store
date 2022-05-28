import { Directive } from "@angular/core";

@Directive({
    selector: '[attr]',
    exportAs: 'ngModel'
})

export class FormDirective{
    constructor(){}
}