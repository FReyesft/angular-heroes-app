import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero.interface';

@Pipe({
  name: 'urlImage'
})
export class UrlImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if (!hero!.id && !hero.alt_img) {
      return '../../assets/assets/no-image.png';
    }
    if (hero.alt_img) return hero.alt_img;
    return `../../assets/assets/heroes/${hero!.id}.jpg`

  }
}
