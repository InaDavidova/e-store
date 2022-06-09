import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbidenNameValidator(forbiddenName: RegExp) : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null =>{    // value is any
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    }
}