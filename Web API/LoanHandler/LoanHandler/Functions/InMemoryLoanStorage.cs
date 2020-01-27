using System.Collections.Generic;

namespace LoanHandler.Functions
{
    public static class InMemoryLoanStorage
    {
        public static readonly List<Loan> Loans = new List<Loan>
        {
            new Loan
            {
                LoanID = 1,
                BorrowerName = "John Doe",
                FundingAmount = 10000,
                RepaymentAmount = 12000
            },
            new Loan
            {
                LoanID = 2,
                BorrowerName = "Rusty Shackleford",
                FundingAmount = 2000,
                RepaymentAmount = 2300
            },
            new Loan
            {
                LoanID = 3,
                BorrowerName = "Saul Wellingood",
                FundingAmount = 24000,
                RepaymentAmount = 27000
            }
        };
    }
}
