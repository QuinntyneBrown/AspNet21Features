import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SignalRDemoHubClient } from './signalr-demo-hub-client';
import { SignalRDemoHubClientGuard } from './signalr-demo-hub-client.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate:[SignalRDemoHubClientGuard]
      }
    ])
  ],
  providers: [
    SignalRDemoHubClient,
    SignalRDemoHubClientGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
