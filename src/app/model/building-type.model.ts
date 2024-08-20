import { ResourceType } from "./resource-type.model";
import { buildingtypes } from "../data/building-type.data.json";

export class BuildingType {
  private static _buildingTypes: Map<string, BuildingType> = new Map();

  public readonly name: string;
  public readonly description: string;
  public readonly image: string;
  public readonly cost: Map<ResourceType, number>;

  private constructor(name: string, description: string, image: string = "favicon.ico", cost: Map<ResourceType, number> = new Map()) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.cost = cost;
  }

  public static initialize(): void {
    for (const buildingType of Object.values(buildingtypes)) {
      BuildingType._buildingTypes.set(buildingType.name, new BuildingType(buildingType.name, buildingType.description, buildingType.image || undefined));
    }
  }

  public static getBuildingType(name: string): BuildingType | undefined {
    return this._buildingTypes.get(name);
  }

  public static getBuildingTypes(): BuildingType[] {
    return Array.from(this._buildingTypes.values());
  }
}

// Initialize the building types
BuildingType.initialize();
