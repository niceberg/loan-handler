using Microsoft.VisualStudio.TestTools.UnitTesting;
using LoanHandler.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace LoanHandler.Controllers.Tests
{
    [TestClass()]
    public class LoanControllerTests
    {
        [TestMethod()]
        public void GetTest()
        {
            var lc = new LoanController();
            Assert.IsNotNull(lc.Get().Value);
        }

        [TestMethod()]
        public void GetByIdTest1()
        {
            var lc = new LoanController();
            var result = lc.Get(1);
            
            Assert.IsNotNull(result.Value);
            Assert.IsInstanceOfType(result.Value, typeof(Loan));
        }

        [TestMethod()]
        public void GetByIdTest2()
        {
            var lc = new LoanController();
            var result = lc.Get(int.MaxValue);
            Assert.IsInstanceOfType(result.Result, typeof(NotFoundObjectResult));
        }

        [TestMethod()]
        public void AddTest()
        {
            var lc = new LoanController();
            var newLoan = new Loan
            {
                BorrowerName = "Test User",
                FundingAmount = 10.01,
                RepaymentAmount = 12.20
            };

            var result = lc.Add(newLoan);

            Assert.IsNotNull(result.Value);
        }

        [TestMethod()]
        public void DeleteTest1()
        {
            var lc = new LoanController();
            var newLoan = new Loan
            {
                BorrowerName = "Test User",
                FundingAmount = 10.01,
                RepaymentAmount = 12.20
            };

            var addResult = lc.Add(newLoan);    // returns ID of new item

            Assert.IsNotNull(addResult.Value);

            var result = lc.Delete(addResult.Value.LoanID);

            Assert.AreEqual(result.Value, true);
        }

        [TestMethod()]
        public void DeleteTest2()
        {
            var lc = new LoanController();
            var result = lc.Delete(int.MaxValue);

            Assert.IsInstanceOfType(result.Result, typeof(NotFoundObjectResult));
        }
    }
}