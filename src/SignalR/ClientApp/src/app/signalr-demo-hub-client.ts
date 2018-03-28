import { HubConnection } from "@aspnet/signalr";
import { NgZone, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SignalRDemoHubClient {
  private _connect: Promise<any>;
  private _connection: HubConnection;

  constructor(private _ngZone: NgZone) { }

  public messages$: Subject<string> = new Subject();

  public connect(): Promise<any> {
    if (this._connect) return this._connect;
    
    this._connect = new Promise((resolve) => {
      this._connection = this._connection || new HubConnection("/signalrDemoHub");

      this._connection.on("message", (value) => {

        this._ngZone.run(() => this.messages$.next(value));
      });

      this._connection.start().then(() => resolve());
    });

    return this._connect;
  }
  
}
