import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Loan } from '../../models';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent {
  @Input() loans: Loan[];
  @Output() delete: EventEmitter<Loan> = new EventEmitter<Loan>();

  displayedColumns: string[] = ['ID', 'BorrowerName', 'FundingAmount', 'RepaymentAmount', 'Delete'];

  resultsLength = 0;
  isLoadingResults = false;

  constructor() { }

  deleteLoan(loan: Loan) {
    this.delete.emit(loan);
  }
}
