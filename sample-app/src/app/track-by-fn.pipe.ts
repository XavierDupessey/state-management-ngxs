import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trackBy' })
export class TrackByFnPipe implements PipeTransform {
  transform<T>(key: keyof T): (_: number, v: T) => T[keyof T] {
    return (_, v: T) => v[key];
  }
}
