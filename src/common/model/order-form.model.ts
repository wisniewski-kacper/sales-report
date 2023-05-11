import {OrderProductListItemModel} from './order-product-list-item.model';

export interface OrderFormModel {
    customerId: number;
    products: OrderProductListItemModel[];
}