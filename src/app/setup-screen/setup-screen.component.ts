import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ArchipelagoServiceService } from "../service/archipelago-service.service";
import { ArchipelagoLobbyComponent } from "../archipelago-lobby/archipelago-lobby.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-setup-screen",
  standalone: true,
  imports: [FormsModule, ArchipelagoLobbyComponent],
  templateUrl: "./setup-screen.component.html",
  styles: ``,
})
export class SetupScreenComponent {
  serverAddress: string = "";
  slot: string = "";
  connectionErrorMessage: string = "";

  constructor(
    private archipelagoService: ArchipelagoServiceService,
    private router: Router,
  ) {
    this.loadFromLocalStorage();
  }

  protected connect() {
    // Clear the error message
    this.connectionErrorMessage = "";

    // Check if the server address is in the correct format
    const ipRegex = new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:[0-9]{1,5}$/);
    const urlRegex = new RegExp(/^([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)(:[0-9]{1,5})?$/);

    if (!ipRegex.test(this.serverAddress) && !urlRegex.test(this.serverAddress)) {
      this.connectionErrorMessage = "Invalid server address format";
      return;
    }

    // serverAddress is a string in the form "hostname:port"
    var hostname: string = this.serverAddress.split(":")[0];
    var port: number = parseInt(this.serverAddress.split(":")[1]);

    // Connect to the server
    var response = this.archipelagoService.connect(hostname, port, this.slot); // response is of type Promise<string | undefined>

    response.then((error) => {
      if (error !== undefined) {
        this.connectionErrorMessage = error;
      } else {
        this.saveToLocalStorage();
        this.router.navigate(["/game"]);
      }
    });
  }

  private saveToLocalStorage() {
    localStorage.setItem("connectiondata", JSON.stringify({ serverAddress: this.serverAddress, slot: this.slot }));
  }

  private loadFromLocalStorage() {
    var retrievedData = localStorage.getItem("connectiondata");
    if (retrievedData === null) {
      return;
    }

    var data = JSON.parse(retrievedData);
    if (data !== null) {
      this.serverAddress = data.serverAddress;
      this.slot = data.slot;
    }
  }
}
