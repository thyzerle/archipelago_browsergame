import { Component } from "@angular/core";
import { ArchipelagoServiceService } from "../service/archipelago-service.service";
import { ConnectedPacket, NetworkSlot, Player, ServerPacket } from "archipelago.js";
import { KeyValuePipe } from "@angular/common";

@Component({
  selector: "app-archipelago-lobby",
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: "./archipelago-lobby.component.html",
  styles: ``,
})
export class ArchipelagoLobbyComponent {
  isConnected: boolean = false;
  serverAddress: string = "";
  slot_number: number = -1;
  players: readonly Player[] = [];

  constructor(private archipelagoService: ArchipelagoServiceService) {
    if (this.archipelagoService.isConnected()) {
      this.isConnected = true;
      this.serverAddress = this.archipelagoService.getServerAddress();
      this.slot_number = this.archipelagoService.getActiveSlot();
      this.players = this.archipelagoService.getPlayers();
    }
  }
}
