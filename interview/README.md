
User Story
We have been given accesses to invoice APIs. Business wants us to show customer invoices on Account in Salesforce. 
Invoices are exposed though an external API and require some pre-parsing to fit the business needs.

To calculate the invoice balance one must take the amount and subtract the payment.


Acceptance Criteria
1. Invoices fetched and shown in Salesforce.
2. Balance is calculated.

Technical Description
* ENDPOINT: https://customer-database.com/customers/invoices
* Add customerId as a URL get Parameter.
* Example response can be found in staticresources/invoices.json
* The Authentication token can be fetched from the static method in TokenHandler.getToken()
* and should be added as a bearer token. 
* We need to calculate the "balance" of each individual invoice
