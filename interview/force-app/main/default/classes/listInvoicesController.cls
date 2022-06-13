/**
 * Created by heol15 on 13/06/2022.
 */
public with sharing class listInvoicesController {

    //TODO:
    // ENDPOINT: https://customer-database.com/customers/invoices
    // Add customerId as a URL get Parameter.
    // Example response can be found in staticresources/invoices.json
    // The Authentication token can be fetched from the static method in TokenHandler.getToken()
    // and should be added as a bearer token.

    //TODO:
    // We need to calucate the "balance" of each individual invoice


    @AuraEnabled
    public String getInvoices(String customerId){
        return null;
    }

}