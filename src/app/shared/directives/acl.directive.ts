import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  @Input()
  public set appAcl(arg: string[]) {
    console.log(arg);


    // this.service.get

    localStorage.getItem('admin') ?
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      : this.viewContainerRef.clear();

  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log('acl', this.templateRef, this.viewContainerRef);

  }


  // ngOnInit() {
  //   console.log(this.appAcl);

  // }

}
