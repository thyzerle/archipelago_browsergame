import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkmodeToggleComponent } from './header/darkmode-toggle/darkmode-toggle.component';
import { DarkmodeServiceService } from './service/darkmode-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkmodeToggleComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  title = 'archipelago_browsergame2';

  constructor(private darkmodeService: DarkmodeServiceService) {}

  protected isDarkMode() {
    return this.darkmodeService.isDarkMode();
  }
}
