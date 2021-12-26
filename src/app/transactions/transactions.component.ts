import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions = new MatTableDataSource<any>();
  displayedColumns = ["id", "amount", "balance", "label", "date"];

  constructor(private transactionService: TransactionService) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getTransactions();
  }
  
  getTransactions(): void {
    this.transactionService.getHeroes().subscribe(transactions => {
      this.transactions = new MatTableDataSource<any>(transactions);
      this.transactions.sort = this.sort;
    });
  }
}