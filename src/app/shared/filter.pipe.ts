import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../core/models/post.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Post[], searchTerm: string): Post[] {
    if (!items || !searchTerm) {
      return items;
    }
    const term = searchTerm.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(term)
    );
  }
}
