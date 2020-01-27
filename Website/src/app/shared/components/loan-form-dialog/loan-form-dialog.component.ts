import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Loan } from '../../models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loan-form-dialog',
  templateUrl: './loan-form-dialog.component.html',
  styleUrls: ['./loan-form-dialog.component.scss']
})
export class LoanFormDialogComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoanFormDialogComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      borrowerName: null,
      fundingAmount: null,
      repaymentAmount: null
    });
  }

  addLoan() {
    const loan: Partial<Loan> = {
      borrowerName: this.addForm.get('borrowerName').value,
      fundingAmount: this.addForm.get('fundingAmount').value,
      repaymentAmount: this.addForm.get('repaymentAmount').value
    };

    this.addForm.reset();
    Object.keys(this.addForm.controls).forEach(key => {
      this.addForm.controls[key].setErrors(null);
    });

    this.dialogRef.close(loan);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
