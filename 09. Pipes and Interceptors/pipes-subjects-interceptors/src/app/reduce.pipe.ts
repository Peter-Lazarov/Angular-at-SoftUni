import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true //Default - caches the rendering
})
export class ReducePipe<T> implements PipeTransform {
  transform(array: T[], callbackFunction: (accumulator: any, current: any) => any, initialValue: T): unknown {
    return array.reduce(callbackFunction, initialValue);
  }

}
