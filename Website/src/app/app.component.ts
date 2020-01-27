import { Component, OnInit } from '@angular/core';
import { Loan } from './shared/models';
import { DataService } from './shared/services/data.service';
import { MatDialog } from '@angular/material';
import { LoanFormDialogComponent } from './shared/components/loan-form-dialog/loan-form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loans: Loan[];

  constructor(
    private dataSvc: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSvc.getLoans().subscribe(result => {
      this.loans = result;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoanFormDialogComponent, {
      width: '30vw'
    });

    dialogRef.afterClosed().subscribe((loan: Loan) => {
      if (loan !== null && loan !== undefined) {
        this.dataSvc.addLoan(loan).subscribe(result => {
          this.loans = [...this.loans, result];
        });
      }
    });
  }

  deleteLoan(loan: Loan) {
    this.dataSvc.deleteLoan(loan.loanID).subscribe(result => {
      if (result === true) {
        this.loans = this.loans.filter(l => l.loanID !== loan.loanID);
      }
    });
  }
}
