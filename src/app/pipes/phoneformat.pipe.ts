import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name: 'phoneformat'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(input:any,parameter1:String) {
      let output =input?input.toString():'';
      if(output.length==10){
           if(parameter1=='IN'){
               return  `+91-${output.substring(0,5)}-${output.substring(5,10)}`
           }
           else{
          return `+1-${output.substring(0,3)}-${output.substring(3,6)}-${output.substring(6,10)}`
           }
      }
      else{
          return input;
      }
    }
}
