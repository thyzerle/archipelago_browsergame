import { Routes } from "@angular/router";
import { SetupScreenComponent } from "./setup-screen/setup-screen.component";
import { GameComponent } from "./game/game.component";

export const routes: Routes = [
  //{ path: "", component: LoadingScreenComponent }, // Redirect to /game/archipelago if it is an archipelago game
  { path: "", redirectTo: "/game", pathMatch: "full" },
  { path: "game", component: GameComponent },
  { path: "game/archipelago", component: SetupScreenComponent }, // Redirect to /game after successful connection
];
