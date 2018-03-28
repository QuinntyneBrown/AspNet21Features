import { Component } from '@angular/core';
import { SignalRDemoHubClient } from './signalr-demo-hub-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _hubClient: SignalRDemoHubClient) {

  }

  async ngOnInit() {
    await this._hubClient.connect();
  }
}
