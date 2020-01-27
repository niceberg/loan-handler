# Getting started

## Web API
Open the solution in Visual Studio and start IIS Express (F5).

## Website
Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally.

Run `npm install` to install neccessary packages, then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. For security reasons the API only accepts requests coming from `http://localhost:4200/`.

# Structure
A loan consists of the following properties:

- Loan ID

- Borrower name

- Repayment amount

- Funding amount (the amount given to the borrower which is less than the repayment amount)

 

Task 1: Web API

Create a C# Web API (.NET or .NET Core) that has methods for doing the following:

- Adding a loan

- Getting a loan by loan ID

- Getting all loans

- Deleting a loan

 

The loans should be added to an in-memory data store in the Web API application. This means the data will only exist whilst the API is running.

 

Task 2: Website

Create a website with one page that allows you to call all methods of the Web API.

 

Optional bonus points:

- Make the website look nice.

- Use Angular/React/Vue.

- Use .NET Core.

- Use one or more design patterns.

- Add tests
