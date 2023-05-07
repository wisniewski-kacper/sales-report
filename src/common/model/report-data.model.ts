import {ProductDataModel} from './product-data.model';

export interface ReportDataModel {
    customerName: string;
    products: ProductDataModel[];
    totalAmount: number;
    totalValue: number;
    currency: string
}