using System.Collections.Generic;
using System.Linq;

namespace LoanHandler.Functions
{
    public class LoanFunctions
    {
        public List<Loan> GetLoans()
        {
            return InMemoryLoanStorage.Loans;
        }

        public Loan GetLoan(int id)
        {
            return InMemoryLoanStorage.Loans.Find(l => l.LoanID == id);
        }

        public Loan Add(Loan source)
        {
            int lastID;

            if (InMemoryLoanStorage.Loans.Any())
            {
                lastID = InMemoryLoanStorage.Loans.Max(l => l.LoanID);
            }
            else
            {
                lastID = 0;
            }
            
            var newLoan = new Loan
            {
                LoanID = lastID + 1,
                BorrowerName = source.BorrowerName,
                FundingAmount = source.FundingAmount,
                RepaymentAmount = source.RepaymentAmount
            };

            InMemoryLoanStorage.Loans.Add(newLoan);

            return newLoan;
        }

        public bool? Delete(int id)
        {
            var loan = InMemoryLoanStorage.Loans.Find(l => l.LoanID == id);

            if (loan == null)
            {
                return null;
            }

            return InMemoryLoanStorage.Loans.Remove(loan);
        }
    }
}
