import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string = "";
  font: string = "default";
  fontFamilies: any[] = [];
  fontSize: number = 16;
  align: string = "left";

  constructor() { }

  ngOnInit(): void {
    this.font = "Arial";

    this.fontFamilies = [];
    this.fontFamilies.push({'title':'Arial','value':'Palatino Linotype'});
    this.fontFamilies.push({'title':'Georgia','value':'Georgia, serif'});
    this.fontFamilies.push({'title':'Times New Roman','value':'Times New Roman'});
    this.fontFamilies.push({'title':'Palatino Linotype','value':'Palatino Linotype'});
  }

  changeAlign(align: string): void {
    this.align = align;
  }
}