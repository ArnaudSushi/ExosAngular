import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import transaction from '../assets/transactions.json';
import file1 from '../assets/01-00.json';
import file2 from '../assets/01-01.json';
import file3 from '../assets/01-02.json';
import file4 from '../assets/01-03.json';
import file5 from '../assets/01-04.json';
import file6 from '../assets/01-05.json';
import file7 from '../assets/01-06.json';
import file8 from '../assets/01-07.json';
import file9 from '../assets/01-08.json';
import file10 from '../assets/01-09.json';
import file11 from '../assets/01-10.json';
import file12 from '../assets/01-11.json';
import file13 from '../assets/01-12.json';
import file14 from '../assets/01-98.json';
import file15 from '../assets/01-99.json';
import file16 from '../assets/02-00.json';
import file17 from '../assets/02-01.json';
import file18 from '../assets/02-02.json';
import file19 from '../assets/02-03.json';
import file20 from '../assets/02-04.json';
import file21 from '../assets/02-05.json';
import file22 from '../assets/02-06.json';
import file23 from '../assets/02-07.json';
import file24 from '../assets/02-08.json';
import file25 from '../assets/02-09.json';
import file26 from '../assets/02-10.json';
import file27 from '../assets/02-11.json';
import file28 from '../assets/02-12.json';
import file29 from '../assets/02-98.json';
import file30 from '../assets/02-99.json';
import file31 from '../assets/03-01.json';
import file32 from '../assets/03-02.json';
import file33 from '../assets/03-03.json';
import file34 from '../assets/03-04.json';
import file35 from '../assets/03-05.json';
import file36 from '../assets/03-06.json';
import file37 from '../assets/03-07.json';
import file38 from '../assets/03-08.json';
import file39 from '../assets/03-09.json';
import file40 from '../assets/03-10.json';
import file41 from '../assets/03-11.json';
import file42 from '../assets/03-98.json';
import file43 from '../assets/03-99.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = transaction;
    const trans = [file1, file2, file3, file4, file5, file6, file7, file8, file9, file10,
    file11, file12, file13, file14, file15, file16, file17, file18, file19, file20,
    file21, file22, file23, file24, file25, file26, file27, file28, file29, file30,
    file31, file32, file33, file34, file35, file36, file37, file38, file39, file40,
    file41, file42, file43];
    return { transactions, trans };
  }
}