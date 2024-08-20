import { BuildingType } from "./building-type.model";
import { Settler } from "./settler.model";

export class BuildingSlot {
  private _buildingType: BuildingType | null = null;
  private _settlerSlots: Settler[] = [];
  private _level: number = 0;

  public constructor(buildingType: BuildingType | null, level: number = 1) {
    this._buildingType = buildingType;
    this._level = level;
    this._settlerSlots.length = Math.floor(Math.random() * 4); //TODO fix this shit

    if (this._settlerSlots.length > 0) {
      const randomSlotIndex = Math.floor(Math.random() * this._settlerSlots.length);
      this._settlerSlots[randomSlotIndex] = new Settler("Günther");
    }
  }

  public get buildingType(): BuildingType | null {
    return this._buildingType;
  }

  public get level(): number {
    return this._level;
  }

  public get settlerSlots(): Settler[] {
    return this._settlerSlots;
  }

  public get settlerCapacity(): number {
    return this._settlerSlots.length;
  }
}
