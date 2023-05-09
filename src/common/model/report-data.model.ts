import {ReportProductDataModel} from './report-product-data.model';

export interface ReportDataModel {
    customerName: string;
    products: ReportProductDataModel[];
    totalAmount: number;
    totalValue: number;
    currency: string
}