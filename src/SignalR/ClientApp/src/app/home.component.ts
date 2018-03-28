import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  selector: "app-home"
})
export class HomeComponent { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
