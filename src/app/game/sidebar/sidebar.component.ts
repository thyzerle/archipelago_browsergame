import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroChevronLeft, heroChevronRight } from "@ng-icons/heroicons/outline";
import { ArchipelagoLobbyComponent } from "../../archipelago-lobby/archipelago-lobby.component";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgIconComponent, ArchipelagoLobbyComponent],
  templateUrl: "./sidebar.component.html",
  styles: ``,
  providers: [provideIcons({ heroChevronLeft, heroChevronRight })],
})
export class SidebarComponent {
  collapsed: boolean = true;

  protected toggleCollapse(collapsed: boolean = !this.collapsed) {
    this.collapsed = collapsed;
  }
}
