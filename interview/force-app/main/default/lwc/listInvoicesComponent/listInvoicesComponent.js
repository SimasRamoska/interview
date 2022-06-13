/**
 * Created by heol15 on 13/06/2022.
 */

import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import ACCOUNT_FIELD_CUSTOMER_ID from '@salesforce/schema/Account.Customer_Id__c';

import getInvoices from '@salesforce/apex/listInvoicesController.getInvoices';

const ACCOUNT_FIELDS = [ACCOUNT_FIELD_CUSTOMER_ID];
const COLUMNS = [
    { label: 'Invoice Number', fieldName: 'invoice_no' },
    { label: 'Status', fieldName: 'status' },
    { label: 'Invoice Date', fieldName: 'invoice_date' },
    { label: 'Amount', fieldName: 'amount' },
    { label: 'Payment', fieldName: 'payment' },
    { label: 'Balance', fieldName: 'balance' }
];

export default class ListInvoicesComponent extends LightningElement {
    @api recordId;
    fields = ACCOUNT_FIELDS;

    data = [];
    columns = COLUMNS;

    @wire(getRecord, {recordId: '$recordId', optionalFields: 'fields'})
    wiredRecord(response){
        const { data, error } = response;
    }

}