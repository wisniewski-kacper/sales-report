import {ProductDataModel, ProductFormModel} from '@/common';

export interface ProductEditStateModel {
    product: ProductDataModel|null;
    getLoading: boolean;
    getLoaded: boolean;
    getError: string|null;
    form: ProductFormModel|null;
    submitLoading: boolean;
    submitLoaded: boolean;
    submitError: string|null;
}