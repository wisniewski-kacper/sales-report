import {ProductFormModel} from '@/common';

export interface ProductCreateStateModel {
    form: ProductFormModel|null;
    loading: boolean;
    loaded: boolean;
    error: string|null;
}