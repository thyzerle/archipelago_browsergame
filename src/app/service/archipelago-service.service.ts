import { EventEmitter, Injectable, Output } from "@angular/core";
import { Client, ITEMS_HANDLING_FLAGS, SERVER_PACKET_TYPE, CONNECTION_ERROR, ConnectionError, ServerPacket, ConnectedPacket, Player } from "archipelago.js";

@Injectable({
  providedIn: "root",
})
export class ArchipelagoServiceService {
  @Output() connected: EventEmitter<ConnectedPacket> = new EventEmitter<ConnectedPacket>();
  @Output() roomUpdate: EventEmitter<ServerPacket> = new EventEmitter<ServerPacket>();
  @Output() roomInfo: EventEmitter<ServerPacket> = new EventEmitter<ServerPacket>();
  @Output() connectionRefused: EventEmitter<ServerPacket> = new EventEmitter<ServerPacket>();

  GAME_NAME: string = "Minecraft"; // "ARCHIPELAGO_BROWSERGAME";

  private client: Client;

  constructor() {
    this.client = new Client();

    this.client.addListener(SERVER_PACKET_TYPE.CONNECTED, (packet: ConnectedPacket) => {
      this.connected.emit(packet);
    });
    this.client.addListener(SERVER_PACKET_TYPE.ROOM_UPDATE, (packet: ServerPacket) => {
      this.roomUpdate.emit(packet);
    });
    this.client.addListener(SERVER_PACKET_TYPE.ROOM_INFO, (packet: ServerPacket) => {
      this.roomInfo.emit(packet);
    });
    this.client.addListener(SERVER_PACKET_TYPE.CONNECTION_REFUSED, (packet: ServerPacket) => {
      this.connectionRefused.emit(packet);
    });
  }

  public connect(hostname: string, port: number, slot: string): Promise<string | undefined> {
    return this.client
      .connect({
        hostname: hostname,
        port: port,
        game: this.GAME_NAME,
        name: slot,
        items_handling: ITEMS_HANDLING_FLAGS.REMOTE_ALL,
      })
      .then(() => {
        return undefined;
      })
      .catch((error) => {
        return error;
      });
  }

  public isConnected(): boolean {
    return this.client.status === "Connected";
  }

  public getServerAddress(): string {
    // Remove ws:// or wss:// from the beginning and the trailing slash from the end of the URI if it exists
    return this.client.uri?.replace(/^wss?:\/\//, "").replace(/\/$/, "") || "N/A";
  }

  public getActiveSlot(): number {
    return this.client.data.slot;
  }

  public getPlayers(): ReadonlyArray<Player> {
    return this.client.players.all;
  }
}
