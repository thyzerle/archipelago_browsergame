import { Component, Input } from "@angular/core";
import { BuildingSlot } from "../../model/building-slot.model";

@Component({
  selector: "app-building-slot",
  standalone: true,
  imports: [],
  templateUrl: "./building-slot.component.html",
  styles: ``,
})
export class BuildingSlotComponent {
  @Input() building: BuildingSlot | null = null;
}
