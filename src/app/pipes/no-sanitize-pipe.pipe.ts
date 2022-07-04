import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitizePipe'
})
export class NoSanitizePipePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
