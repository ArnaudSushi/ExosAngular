import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNum: number = 0;
  secondNum: number = 0;
  operator: string = "";
  result: number = 0;
  showResult: boolean = false;
  calculus: string = "";
  previousCalculus: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    if (this.operator) {
      let time = new Date();
      this.calculus = time.toLocaleString('fr-FR') + " : ";
    }
    this.showResult = true;
    switch (this.operator) {
      case "add":
        this.result = this.firstNum + this.secondNum;
        this.calculus += this.firstNum + " + " + this.secondNum + " = " + this.result;
        this.previousCalculus.push(this.calculus);
      break;
      case "sub":
        this.result = this.firstNum - this.secondNum;
        this.calculus += this.firstNum + " - " + this.secondNum + " = " + this.result;
        this.previousCalculus.push(this.calculus);
      break; 
      case "mul":
        this.result = this.firstNum * this.secondNum;
        this.calculus += this.firstNum + " * " + this.secondNum + " = " + this.result;
        this.previousCalculus.push(this.calculus);
      break;
      case "div":
        this.result = this.firstNum / this.secondNum;
        this.calculus += this.firstNum + " / " + this.secondNum + " = " + this.result;
        this.previousCalculus.push(this.calculus);
      break;
      default:
        this.showResult = false;
        break;
    }
  }

  erasePrevCalcs(): void {
    this.previousCalculus = [];
  }

}
