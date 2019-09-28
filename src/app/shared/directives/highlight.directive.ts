import { Directive, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() defaultColor: string;

  @Input('appHighlight')
  public highlightColor: string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    // this.el.nativeElement.
    // this.el.nativeElement.style.backgroundColor = 'red';
  }

  ngAfterViewInit() {
    // this.el.nativeElement.style.display = 'block';
    // this.el.nativeElement.style.height = '1000px';
    console.log(this.el.nativeElement.offsetHeight);

  }


  @HostListener('mouseenter')
  public mouseEnter(): void {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click') onMouseClick() {

    // this.el.nativeElement.classList = '31242424'
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
