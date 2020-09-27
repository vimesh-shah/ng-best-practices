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
    let data = this.navlinks.toArray();

    data.forEach((link, index) => {
      if (this.isNavActive == true) {
        link.nativeElement.style.animation =
          "navLinkfade 0.5s ease forwards " + (index / data.length + 0.2) + "s";
      } else {
        link.nativeElement.style.animation = "";
      }
    });
  }
}
