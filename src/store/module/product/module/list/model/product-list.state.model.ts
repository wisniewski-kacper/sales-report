import {ProductListItemModel} from '@/common';

export interface ProductListStateModel {
    list: ProductListItemModel[];
    loading: boolean;
    loaded: boolean;
    error: string|null;
}