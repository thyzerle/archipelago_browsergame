import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ArchipelagoServiceService } from "../service/archipelago-service.service";

export const isConnectedToArchipelagoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const archipelagoService = inject(ArchipelagoServiceService);

  if (archipelagoService.isConnected()) {
    return true;
  } else {
    return router.parseUrl("/archipelago");
  }
};
