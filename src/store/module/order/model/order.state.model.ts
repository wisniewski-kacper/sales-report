import {OrderFormModel, OrderProductDataModel} from '@/common';

export interface OrderStateModel {
    products: OrderProductDataModel[];
    getLoading: boolean;
    getLoaded: boolean;
    getError: string|null;
    form: OrderFormModel|null;
    submitLoading: boolean;
    submitLoaded: boolean;
    submitError: string|null;
}