import { Routes } from "@angular/router";
import { SetupScreenComponent } from "./setup-screen/setup-screen.component";
import { ArchipelagoLobbyComponent } from "./archipelago-lobby/archipelago-lobby.component";
import { isConnectedToRoomGuard } from "./guard/is-connected-to-room.guard";

export const routes: Routes = [
  { path: "", component: SetupScreenComponent },
  { path: "lobby", component: ArchipelagoLobbyComponent, canActivate: [isConnectedToRoomGuard] },
];
