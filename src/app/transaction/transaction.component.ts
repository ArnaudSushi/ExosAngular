import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: any;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.transactionService.getHero(id).subscribe(transaction => {
      transaction.forEach((trans: any) => {
        if (trans.id === id) { this.transaction = trans; }
      });
      console.log(this.transaction);
    });
  }

  generateArray(obj: any) {
    return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
  }
}