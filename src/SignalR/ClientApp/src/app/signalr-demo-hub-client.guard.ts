import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { SignalRDemoHubClient } from "./signalr-demo-hub-client";


@Injectable()
export class SignalRDemoHubClientGuard implements CanActivate {
  constructor(private _signalRDemoHubClient: SignalRDemoHubClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this._signalRDemoHubClient.connect();
  }
}
