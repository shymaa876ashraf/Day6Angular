import { AbstractControl} from "@angular/forms";
 
export function ForbiddenNameValidator(regExpValue:RegExp)
{
    return (control:AbstractControl)=>
    {
        const forbidden =regExpValue.test(control.value.toLowerCase());
        console.log(forbidden)
    
        return forbidden ? {'forbiddenName':{value:control.value}} :null;
    } 
}