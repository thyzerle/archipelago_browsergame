import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BuildingSlot } from "../model/building-slot.model";
import { BuildingType } from "../model/building-type.model";
import { BuildingSlotComponent } from "./building-slot/building-slot.component";
@Component({
  selector: "app-game",
  standalone: true,
  imports: [SidebarComponent, BuildingSlotComponent],
  templateUrl: "./game.component.html",
  host: { class: "flex justify-center w-full" },
  styles: ``,
})
export class GameComponent {
  protected buildings: BuildingSlot[] = new Array<BuildingSlot>();

  constructor() {
    BuildingType.getBuildingTypes().forEach((buildingType: BuildingType) => {
      this.buildings.push(new BuildingSlot(buildingType));
    });
  }
}
