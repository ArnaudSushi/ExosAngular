import { Component } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent {
  date : Date = new Date(Date.now());
  hours!: string;
  minutes!: string;
  seconds!: string;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.updateTime();
  }

  private setCurrentTime() {
    this.date = new Date(Date.now());
    this.hours = this.leftPadZero(this.date.getHours());
    this.minutes = this.leftPadZero(this.date.getMinutes());
    this.seconds = this.leftPadZero(this.date.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}