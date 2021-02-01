import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
  async abc() {
    await this.wait(2000);
    let a = Promise.resolve("Hello");
    return  a;
  }

  constructor() {
    this.abc().then(data => {
      console.log(data);
    });
  }
}
