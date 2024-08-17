import { Component } from "@angular/core";
import { DarkmodeServiceService } from "../../service/darkmode-service.service";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { faMoon, faSun } from "@ng-icons/font-awesome/regular";

@Component({
  selector: "app-darkmode-toggle",
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ faMoon, faSun })],
  templateUrl: "./darkmode-toggle.component.html",
  styles: ``,
})
export class DarkmodeToggleComponent {
  constructor(private darkmodeService: DarkmodeServiceService) {}

  protected toggleDarkMode() {
    this.darkmodeService.toggleDarkMode();
  }

  protected isDarkMode() {
    return this.darkmodeService.isDarkMode();
  }
}
