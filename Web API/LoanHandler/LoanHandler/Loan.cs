using System;

namespace LoanHandler
{
    public class Loan
    {
        public int LoanID { get; set; }

        public string BorrowerName { get; set; }

        public double RepaymentAmount { get; set; }

        public double FundingAmount { get; set; }
    }
}
