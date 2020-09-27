import { Component, ElementRef, OnInit, ViewChildren } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  @ViewChildren("navlink") navlinks;

  isNavActive = false;

  constructor() {}

  ngOnInit() {}

  burgerClicked() {
    this.isNavActive = !this.isNavActive;
    this.navlinks.toArray().forEach((link, index) => {
      link.nativeElement.style.animation =
        "navLinkFade 0.5s ease forwards " + (index / 7 + 0.3) + "s";
    });
  }
}
