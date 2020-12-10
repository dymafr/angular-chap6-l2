import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnInit {
  constructor(private el: ElementRef<HTMLLIElement>) {}

  ngOnInit() {
    this.el.nativeElement.style.color = "red";
  }
}
