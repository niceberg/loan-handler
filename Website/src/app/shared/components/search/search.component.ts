import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFormVisible = false;
  searchForm: FormGroup;
  searchResultForm: FormGroup;

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      ID: null
    });

    this.searchResultForm = this.fb.group({
      ID: null,
      borrowerName: null,
      fundingAmount: null,
      repaymentAmount: null
    });
  }

  search() {
    const id = +this.searchForm.get('ID').value;
    this.searchForm.reset();

    this.dataSvc.getLoan(id).subscribe(result => {
      if (result !== null) {
        this.searchFormVisible = true;

        this.searchResultForm.setValue({
          ID: result.loanID,
          borrowerName: result.borrowerName,
          fundingAmount: result.fundingAmount,
          repaymentAmount: result.repaymentAmount
        });
      }
    });
  }

}
