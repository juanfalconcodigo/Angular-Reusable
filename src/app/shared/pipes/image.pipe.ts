import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    if(value===null||value===undefined||value===''){
      return 'assets/images/no-image.png'
    }
    let hack='?'+new Date().getTime();
    return value.concat(hack);
  }

}