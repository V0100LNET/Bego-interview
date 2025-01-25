import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitText'
})
export class SplitTextPipe implements PipeTransform {

  transform(text: string): string | null{
    if(text === null || !text) return null;

    if(text.length > 31){
      text = text.substring(0,31);
      return text.trim().concat('...');
    }
    
    return text;
  }
}
