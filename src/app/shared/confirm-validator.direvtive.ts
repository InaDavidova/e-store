/*import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[appConfirmValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmValidatorDirective,
        multi: true
    }]
})

export class ConfirmValidatorDirective implements Validator{
    @Input()
    appConfirmValidator!: string;
    validate(control: AbstractControl): ValidationErrors | null {
        const controlToCompare = control.parent.get(this.appConfirmValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notEqual' : true};
        }
        return null;
    }
}
*/