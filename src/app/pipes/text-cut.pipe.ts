import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
  {
    name: 'cutText',
    // pure: true
  }
)
export class CutTextPipe implements PipeTransform {
    transform(
        value: string,
        maxLength: number = 100
    ): string {
        console.log('Pipe Changes')
        return value.length > maxLength ? `${value.substring(0, maxLength)}...` : value
    }
}
